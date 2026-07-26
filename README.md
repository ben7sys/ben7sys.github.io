# ben7sys.github.io

Öffentliche technische Wissensbasis und Werkzeuglabor auf Basis von Astro und
Starlight.

## Architektur

- Astro erzeugt vollständig statische Dateien.
- Starlight stellt Navigation, Suche und Dokumentationslayout bereit.
- Wissensinhalte liegen als Markdown unter `src/content/docs/wissen/`.
- Interaktive Werkzeuge liegen als Astro-Seiten unter `src/pages/werkzeuge/`.
- Browser-Werkzeuge verwenden kein Backend und speichern keine Eingaben.
- GitHub Actions validiert Pull Requests und veröffentlicht `master`.

## Lokale Entwicklung

Voraussetzungen:

- Node.js 24 oder neuer
- npm

```bash
npm install
npm run dev
```

Produktionsbuild:

```bash
npm run build
```

Die erzeugte Website liegt anschließend unter `dist/`.

## Veröffentlichung

1. Änderungen auf einem Branch erstellen.
2. Pull Request öffnen.
3. Workflow `Validate` erfolgreich abschließen.
4. Nach `master` mergen.
5. Workflow `Deploy to GitHub Pages` veröffentlicht `dist/`.

In `Settings → Pages → Build and deployment` muss als Quelle **GitHub
Actions** ausgewählt sein.

## Qualitätsregeln

- Fakten und Annahmen unterscheiden.
- Keine internen Systeme, Kundendaten oder Secrets veröffentlichen.
- Primärquellen bevorzugen.
- Verweise statt Duplikate verwenden.
- Abhängigkeiten exakt versionieren.
- Interaktive Werkzeuge lokal und ohne unnötige Datenflüsse umsetzen.
