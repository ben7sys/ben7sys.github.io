---
title: "Lokale Browser-Werkzeuge: Datenschutz durch Architektur"
description: Warum kleine statische Werkzeuge häufig ohne Backend auskommen und dadurch weniger Daten übertragen.
doctype: article
status: stable
publishedAt: 2026-07-26
tags:
  - datenschutz
  - browser
  - architektur
sidebar:
  order: 2
---

Viele Online-Werkzeuge senden Eingaben an einen Server, obwohl die eigentliche
Verarbeitung vollständig im Browser möglich wäre. Das erzeugt zusätzliche
Datenflüsse, Betriebsaufwand und Vertrauensannahmen.

## Lokale Verarbeitung

Ein statisches Browser-Werkzeug besteht aus HTML, CSS und JavaScript. Nach dem
Laden kann es Eingaben direkt auf dem Endgerät verarbeiten. Für Aufgaben wie
Formatprüfung, Konvertierung oder Berechnung ist oft kein Anwendungsserver
erforderlich.

Vorteile:

- Eingaben müssen das Endgerät nicht verlassen.
- Es entsteht keine serverseitige Datenspeicherung.
- Das Werkzeug bleibt einfach hostbar und überprüfbar.
- Betrieb und Skalierung benötigen keine dauerhafte Anwendungsschicht.

## Überprüfbare Aussage statt Versprechen

„Lokal“ sollte technisch überprüfbar sein:

1. Keine API-Aufrufe für die Verarbeitung.
2. Keine Speicherung in Cookies, Local Storage oder IndexedDB.
3. Keine extern nachgeladenen Skripte.
4. Klare Dokumentation aller Abhängigkeiten.
5. Reproduzierbarer statischer Build.

Browser-Entwicklerwerkzeuge können Netzwerkzugriffe und lokale Speicherung
sichtbar machen. Der Quellcode sollte zusätzlich öffentlich prüfbar sein.

## Grenzen

Lokale Verarbeitung ist nicht automatisch sicher. Fehlerhafte
Abhängigkeiten, Cross-Site-Scripting oder übermäßige Berechtigungen bleiben
mögliche Risiken. Große Datenmengen oder serverseitig geschützte Geheimnisse
sind ebenfalls kein geeigneter Anwendungsfall.

## Beispiel

Der [Markdown-Frontmatter-Prüfer](/werkzeuge/frontmatter-pruefer/) analysiert
YAML direkt im Browser. Die YAML-Bibliothek wird beim Build in die statischen
Dateien gebündelt; Eingaben werden nicht an einen Anwendungsserver gesendet.
