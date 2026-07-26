---
layout: page
title: Markdown-Frontmatter-Prüfer
permalink: /tools/frontmatter-pruefer/
icon: fas fa-code
---

<p>Prüft einfaches YAML-Frontmatter lokal im Browser. Es werden keine Eingaben übertragen oder gespeichert.</p>

<div id="fm-tool">
  <label for="fm-input"><strong>Markdown oder Frontmatter</strong></label>
  <textarea id="fm-input" rows="14" spellcheck="false" placeholder="---&#10;title: Beispiel&#10;status: draft&#10;tags: [linux, automation]&#10;---"></textarea>

  <div class="fm-actions">
    <button type="button" id="fm-check">Prüfen</button>
    <button type="button" id="fm-example">Beispiel</button>
    <button type="button" id="fm-copy">Normalisierte Ausgabe kopieren</button>
    <button type="button" id="fm-reset">Zurücksetzen</button>
  </div>

  <section aria-live="polite">
    <h2>Ergebnis</h2>
    <div id="fm-summary">Noch nicht geprüft.</div>
    <ul id="fm-messages"></ul>
  </section>

  <section>
    <h2>Erkannte Schlüssel</h2>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>Schlüssel</th><th>Wert</th><th>Zeile</th></tr></thead>
        <tbody id="fm-rows"><tr><td colspan="3">Keine Daten.</td></tr></tbody>
      </table>
    </div>
  </section>

  <section>
    <h2>Normalisierte Ausgabe</h2>
    <pre id="fm-output">Noch keine Ausgabe.</pre>
  </section>
</div>

<style>
#fm-tool textarea { width: 100%; font-family: var(--bs-font-monospace); padding: .8rem; border: 1px solid var(--main-border-color); border-radius: .5rem; background: var(--main-bg); color: var(--text-color); }
.fm-actions { display: flex; flex-wrap: wrap; gap: .6rem; margin: 1rem 0; }
.fm-actions button { padding: .55rem .8rem; border: 1px solid var(--main-border-color); border-radius: .4rem; background: var(--button-bg); color: var(--text-color); cursor: pointer; }
#fm-summary[data-state="ok"] { color: #198754; font-weight: 600; }
#fm-summary[data-state="error"] { color: #dc3545; font-weight: 600; }
#fm-output { white-space: pre-wrap; overflow-wrap: anywhere; }
</style>

<script>
(() => {
  'use strict';

  const input = document.getElementById('fm-input');
  const summary = document.getElementById('fm-summary');
  const messages = document.getElementById('fm-messages');
  const rows = document.getElementById('fm-rows');
  const output = document.getElementById('fm-output');

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, character => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    })[character]);
  }

  function extractFrontmatter(text) {
    const normalized = text.replace(/\r\n?/g, '\n');
    const lines = normalized.split('\n');
    if (lines[0]?.trim() !== '---') {
      return { error: 'Öffnender Trenner --- fehlt in der ersten Zeile.' };
    }
    const closingIndex = lines.slice(1).findIndex(line => line.trim() === '---');
    if (closingIndex < 0) {
      return { error: 'Schließender Trenner --- fehlt.' };
    }
    return { lines: lines.slice(1, closingIndex + 1) };
  }

  function parse() {
    const extracted = extractFrontmatter(input.value);
    const findings = [];
    const entries = [];
    const seen = new Map();

    if (extracted.error) {
      render([], [extracted.error], '');
      return;
    }

    extracted.lines.forEach((rawLine, index) => {
      const lineNumber = index + 2;
      const trimmed = rawLine.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      if (/^\s/.test(rawLine)) {
        findings.push(`Zeile ${lineNumber}: Verschachtelte YAML-Strukturen werden in dieser ersten Version nicht vollständig ausgewertet.`);
        return;
      }
      const match = rawLine.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
      if (!match) {
        findings.push(`Zeile ${lineNumber}: Kein gültiges Schlüssel-Wert-Paar erkannt.`);
        return;
      }
      const key = match[1];
      const value = match[2].trim();
      if (seen.has(key)) findings.push(`Zeile ${lineNumber}: Schlüssel „${key}“ ist doppelt; zuerst in Zeile ${seen.get(key)}.`);
      else seen.set(key, lineNumber);
      if (!value) findings.push(`Zeile ${lineNumber}: Schlüssel „${key}“ hat keinen Wert.`);
      entries.push({ key, value, lineNumber });
    });

    if (entries.length === 0) findings.push('Kein auswertbares Schlüssel-Wert-Paar gefunden.');
    const normalized = ['---', ...entries.map(entry => `${entry.key}: ${entry.value}`), '---'].join('\n');
    render(entries, findings, normalized);
  }

  function render(entries, findings, normalized) {
    const errors = findings.filter(item => /fehlt|doppelt|Kein gültiges|keinen Wert|Kein auswertbares/.test(item));
    summary.textContent = findings.length === 0 ? `Gültig: ${entries.length} Schlüssel erkannt.` : `${findings.length} Hinweis${findings.length === 1 ? '' : 'e'} gefunden.`;
    summary.dataset.state = errors.length === 0 ? 'ok' : 'error';
    messages.innerHTML = findings.length ? findings.map(item => `<li>${escapeHtml(item)}</li>`).join('') : '<li>Keine Auffälligkeiten erkannt.</li>';
    rows.innerHTML = entries.length ? entries.map(entry => `<tr><td><code>${escapeHtml(entry.key)}</code></td><td>${escapeHtml(entry.value || '—')}</td><td>${entry.lineNumber}</td></tr>`).join('') : '<tr><td colspan="3">Keine Daten.</td></tr>';
    output.textContent = normalized || 'Keine normalisierte Ausgabe verfügbar.';
  }

  document.getElementById('fm-check').addEventListener('click', parse);
  document.getElementById('fm-example').addEventListener('click', () => {
    input.value = '---\ntitle: Lokale Browser-Werkzeuge\nstatus: draft\ntags: [automation, privacy]\ndescription:\nstatus: active\n---\n\n# Inhalt';
    parse();
  });
  document.getElementById('fm-copy').addEventListener('click', async () => {
    if (!output.textContent.startsWith('---')) return;
    try {
      await navigator.clipboard.writeText(output.textContent);
      summary.textContent = 'Normalisierte Ausgabe kopiert.';
      summary.dataset.state = 'ok';
    } catch {
      summary.textContent = 'Kopieren wurde vom Browser blockiert.';
      summary.dataset.state = 'error';
    }
  });
  document.getElementById('fm-reset').addEventListener('click', () => {
    input.value = '';
    summary.textContent = 'Noch nicht geprüft.';
    summary.removeAttribute('data-state');
    messages.innerHTML = '';
    rows.innerHTML = '<tr><td colspan="3">Keine Daten.</td></tr>';
    output.textContent = 'Noch keine Ausgabe.';
    input.focus();
  });
})();
</script>

## Grenzen

Diese erste Version prüft bewusst nur einfache Schlüssel-Wert-Zeilen auf oberster Ebene. Verschachtelte YAML-Strukturen, Blocktexte, Anker und komplexe Datentypen werden nicht vollständig validiert.