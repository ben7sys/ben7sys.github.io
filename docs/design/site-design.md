# Verbindliche Designgrundlage

## Zielbild

Die Website ist eine ruhige, mobile-first Wissens- und Artikelseite für technische Einordnung, Architekturentscheidungen, nachhaltige Systeme, Automatisierung und digitale Souveränität.

## Umsetzungsregeln

1. Astro bleibt das Grundsystem.
2. Starlight bleibt für Artikelseiten und globale Infrastruktur erhalten.
3. Die Startseite erhält ein eigenständiges, reduziertes Erscheinungsbild.
4. Mobile ist die führende Ansicht.
5. Desktop wird aus demselben Layout abgeleitet.
6. Die Startseite besteht aus Header, Einleitung, Tags und Artikelliste.
7. Artikelkarten werden automatisch aus der Content Collection erzeugt.
8. Keine zweite Artikeldatenbank einführen.
9. Markdown und MDX bleiben das Inhaltsformat.
10. `doctype: article` kennzeichnet Artikel.
11. Nur `status: stable` wird auf der Startseite angezeigt.
12. `publishedAt` steuert Veröffentlichung und Sortierung.
13. `description` dient als Kurzbeschreibung.
14. `tags` dienen der thematischen Einordnung.
15. Artikel werden nach Datum absteigend sortiert.
16. Systemschriften bleiben erhalten.
17. Externe Schriftarten bleiben ausgeschlossen.
18. Die bestehende 7SYS-Farbwelt wird weiterverwendet.
19. Karten bleiben klar und leicht, ohne dekorative Überladung.
20. Typografie und Abstände priorisieren Lesbarkeit.
21. Werkzeuge und bestehende Unterseiten bleiben funktional unabhängig.
22. Suche und Tag-Seiten werden erst nach dem Grundlayout verfeinert.
23. Architekturänderungen erfolgen nur bei nachgewiesenem technischen Bedarf.

## Artikel-Mindestdaten

```yaml
title: Beispielartikel
description: Kurze und konkrete Zusammenfassung des Artikels.
doctype: article
status: stable
publishedAt: 2026-08-05
tags:
  - Architektur
  - Digitale Souveränität
```
