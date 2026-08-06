# Architecture Decision Records

Dieser Ordner enthält dauerhaft relevante Architekturentscheidungen des Projekts.

Eine ADR ist erforderlich, wenn sich mindestens einer dieser Punkte ändert:

- Static-Site-Generator oder grundlegende Architektur,
- Hosting- oder Deploymentmodell,
- Datenschutz- oder Datenflussmodell,
- Einführung eines Backends oder externen Laufzeitdienstes,
- dauerhaftes öffentliches URL-Schema,
- wesentliche neue Framework- oder Plattformabhängigkeit.

Kleine Inhalte, Fehlerkorrekturen und Erweiterungen innerhalb vorhandener Muster benötigen keine ADR.

## Dateiname

```text
ADR-YYYYMMDD-kurzer-slug.md
```

Beispiel:

```text
ADR-20260727-astro-starlight-beibehalten.md
```

## Vorlage

```markdown
# ADR: Entscheidungstitel

- Status: vorgeschlagen | akzeptiert | verworfen | ersetzt
- Datum: YYYY-MM-DD
- Entscheider: ben7sys

## Kontext

Welches Problem, welche Randbedingungen und welche bestehenden Fakten führen zur Entscheidung?

## Entscheidung

Welche konkrete Lösung wird gewählt?

## Gründe

Warum ist diese Lösung für das Projekt geeignet?

## Folgen

Welche positiven, negativen und betrieblichen Konsequenzen entstehen?

## Verworfene Alternativen

Welche realistischen Alternativen wurden geprüft und warum nicht gewählt?

## Rückbau

Wie kann die Entscheidung bei Bedarf kontrolliert zurückgenommen oder ersetzt werden?
```

Eine ADR dokumentiert die Entscheidung. Umsetzungsschritte und kurzfristige Aufgaben gehören in den zugehörigen Pull Request oder Backlog.