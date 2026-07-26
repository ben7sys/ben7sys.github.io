# ben7sys.github.io

Öffentliche technische Wissensbasis und Werkzeuglabor für nachhaltige Systeme, Automatisierung und digitale Souveränität.

## Bereiche

- **Wissen:** bereinigte technische Beiträge als Jekyll-Posts
- **Werkzeuge:** statische Browser-Werkzeuge ohne unnötiges Backend
- **Über:** Zweck, Veröffentlichungsgrundsätze und Datenschutzmodell

## Lokale Entwicklung

Voraussetzungen: Ruby, Bundler und die im Repository definierten Abhängigkeiten.

```bash
bundle install
bundle exec jekyll serve
```

Website anschließend unter `http://127.0.0.1:4000` öffnen.

## Veröffentlichung

GitHub Pages veröffentlicht den freigegebenen Stand des Repositorys. Änderungen zunächst auf einem Branch umsetzen, lokal bauen und über einen Pull Request nach `master` integrieren.

## Qualitätsregeln

- keine Zugangsdaten, Kundendaten oder internen Infrastrukturdetails veröffentlichen
- Fakten, Annahmen und bekannte Grenzen unterscheiden
- Werkzeuge standardmäßig lokal im Browser ausführen
- externe Abhängigkeiten minimieren und offenlegen
- Links, Mobilansicht und Build vor der Freigabe prüfen

## Struktur

```text
_posts/       Wissensbeiträge
_tabs/        Hauptnavigation
tools/        Werkzeugseiten
assets/       statische Ressourcen
_config.yml   Jekyll- und Website-Konfiguration
```

## Lizenz

Vorhandene Theme- und Drittanbieter-Lizenzen beachten. Für eigene Inhalte und Werkzeuge ist die Repository-Lizenz maßgeblich.