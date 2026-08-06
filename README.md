# ben7sys.github.io

Öffentliche technische Wissensbasis und Werkzeuglabor auf Basis von Astro und Starlight.

Die Website soll Besuchern helfen, technische Systeme zu **verstehen**, belastbare Entscheidungen zu treffen, Aufgaben umzusetzen, Ergebnisse zu prüfen und unnötige Komplexität zu reduzieren.

## Projektsteuerung

- [`AGENTS.md`](AGENTS.md) — normative Projektregeln für Menschen und KI-Agenten
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — praktischer Ablauf für Änderungen und Pull Requests
- [`docs/adr/`](docs/adr/) — Vorlage und Regeln für dauerhafte Architekturentscheidungen

Vor jeder Änderung ist `AGENTS.md` zu lesen. Jede Erweiterung wird bewusst eingeleitet, auf einem eigenen Branch umgesetzt und erst nach Prüfung sowie ausdrücklicher Freigabe gemergt.

## Architektur

- Astro erzeugt vollständig statische Dateien.
- Starlight stellt Navigation, Suche und Dokumentationslayout bereit.
- Wissensinhalte liegen als Markdown unter `src/content/docs/`.
- Interaktive Werkzeuge liegen als Astro-Seiten unter `src/pages/werkzeuge/`.
- Browser-Werkzeuge verwenden standardmäßig kein Backend und speichern keine Eingaben.
- GitHub Actions validiert Pull Requests und veröffentlicht `master`.

## Lokale Entwicklung

Voraussetzungen:

- Node.js 24 oder neuer
- npm

```bash
npm ci
npm run dev
```

Produktionsbuild:

```bash
npm run build
```

Die erzeugte Website liegt anschließend unter `dist/`. Dieser Ordner wird nicht manuell gepflegt.

## Veröffentlichung

1. Änderung auf einem zweckgebundenen Branch erstellen.
2. Draft-Pull-Request mit Ziel, Besuchernutzen und Abnahmekriterien öffnen.
3. Workflow `Validate` erfolgreich abschließen.
4. Inhalt und sichtbare Darstellung prüfen.
5. Nach ausdrücklicher Freigabe nach `master` mergen.
6. Workflow `Deploy to GitHub Pages` und Live-Seite prüfen.

In `Settings → Pages → Build and deployment` muss als Quelle **GitHub Actions** ausgewählt sein.