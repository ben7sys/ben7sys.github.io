# Beiträge und Änderungen

Die verbindlichen Projektregeln stehen in [`AGENTS.md`](AGENTS.md). Dieses Dokument beschreibt den praktischen Ablauf für einzelne Änderungen.

## 1. Auftrag definieren

Vor der Umsetzung festhalten:

```text
Ziel:
Besuchernutzen:
Scope:
Nicht enthalten:
Abnahmekriterien:
```

Eine Änderung soll klein genug sein, um sie in einem Pull Request vollständig verstehen, prüfen und bei Bedarf zurückrollen zu können.

## 2. Branch anlegen

Ausgehend von aktuellem `master`:

```bash
git switch master
git pull --ff-only
git switch -c <typ>/<kurzer-name>
```

Zulässige Präfixe:

- `content/` — Wissensinhalte
- `feature/` — neue allgemeine Funktion
- `tool/` — Browser-Werkzeug
- `design/` — Darstellung und Nutzerführung
- `fix/` — Fehlerkorrektur
- `platform/` — Build, Workflow oder Abhängigkeit
- `docs/` — Repository-Dokumentation

## 3. Lokal arbeiten

Voraussetzungen:

- Node.js 24 oder neuer
- npm

Installation und Entwicklung:

```bash
npm ci
npm run dev
```

Produktionsbuild:

```bash
npm run build
```

Das Build-Ergebnis unter `dist/` wird nicht manuell bearbeitet oder eingecheckt.

## 4. Inhalte hinzufügen

Öffentliche Wissensinhalte liegen unter `src/content/docs/`.

Vor dem Schreiben prüfen:

- Welche konkrete Besucherfrage wird beantwortet?
- Was ist das nutzbare Ergebnis?
- Welche Voraussetzungen und Grenzen gelten?
- Welche Aussagen sind Fakten, Empfehlungen oder Annahmen?
- Welche Angaben können veralten?
- Enthält der Text interne oder vertrauliche Details?

Minimalbeispiel:

```yaml
---
title: Aussagekräftiger Titel
description: Konkrete Beschreibung des Nutzens mit mindestens zwanzig Zeichen.
doctype: article
status: stable
tags:
  - beispiel
---
```

Das tatsächlich zulässige Schema steht in `src/content.config.ts`.

## 5. Werkzeuge hinzufügen

Browser-Werkzeuge liegen unter `src/pages/werkzeuge/`.

Ein neues Werkzeug benötigt:

- klar abgegrenzte Aufgabe,
- verständliche Eingabe und Ausgabe,
- dokumentierten Datenfluss,
- lokale Verarbeitung als Standard,
- Fehlerzustände und realistische Grenzen,
- mobile und tastaturbedienbare Oberfläche,
- Eintrag in Werkzeugübersicht und Navigation,
- Tests, sobald eigenständige testbare Logik vorhanden ist.

Keine realen vertraulichen Daten als Beispiel verwenden.

## 6. Pull Request öffnen

Pull Requests zunächst als Draft öffnen. Die Vorlage vollständig ausfüllen.

Der Pull Request muss erklären:

- welches Problem gelöst wird,
- welchen Nutzen Besucher erhalten,
- welche Dateien und Bereiche betroffen sind,
- was bewusst nicht enthalten ist,
- wie die Änderung geprüft wurde,
- ob Datenschutz, Datenfluss oder öffentliche URLs betroffen sind.

Sichtbare Änderungen benötigen eine Prüfung auf Smartphone und Desktop sowie im Hell- und Dunkelmodus.

## 7. Validierung und Review

Vor Freigabe müssen mindestens erfüllt sein:

- `npm ci` erfolgreich,
- `npm run build` erfolgreich,
- Workflow `Validate` erfolgreich,
- relevante Links und Navigation funktionieren,
- keine vertraulichen Informationen enthalten,
- Abnahmekriterien erfüllt,
- keine sachfremden Änderungen im Diff.

Eine erfolgreiche CI ersetzt nicht die inhaltliche und visuelle Prüfung.

## 8. Merge und Veröffentlichung

Der Merge erfolgt erst nach ausdrücklicher Freigabe.

Nach dem Merge:

1. Workflow `Deploy to GitHub Pages` prüfen.
2. Live-Seite öffnen.
3. Startseite und betroffene direkte URLs testen.
4. Smartphone-Darstellung kontrollieren.
5. Ergebnis mit den Abnahmekriterien vergleichen.

## 9. Rückbau

Bei einer produktiven Regression:

1. Ursache und verursachenden Merge identifizieren.
2. Bei unmittelbarer Auswirkung den Merge über einen Revert-Pull-Request zurücknehmen.
3. Korrektur auf einem neuen Branch umsetzen.
4. Vollständig validieren und erneut veröffentlichen.

Keine Reparatur direkt in `dist/` und keine stillen Änderungen auf `master`.