# Projektanweisungen für ben7sys.github.io

Diese Datei ist die normative Arbeitsgrundlage für Menschen und KI-Agenten im gesamten Repository. Sie gilt für jede Änderung, sofern ein ausdrücklich freigegebener Auftrag nichts Abweichendes festlegt.

## 1. Zweck des Projekts

`ben7sys.github.io` ist eine öffentliche technische Wissensbasis mit Werkzeuglabor.

Jede Veröffentlichung soll Besuchern mindestens einen konkreten Nutzen bieten:

- **verstehen** — technische Zusammenhänge und Grenzen nachvollziehen,
- **entscheiden** — Optionen, Folgen und Abwägungen erkennen,
- **umsetzen** — eine Aufgabe mit belastbaren Schritten ausführen,
- **prüfen** — Daten, Konfigurationen oder Ergebnisse kontrollieren,
- **vereinfachen** — wiederkehrende oder fehleranfällige Arbeit reduzieren.

Die Website ist kein ungefiltertes Projekttagebuch. Persönliche Erfahrungen werden nur veröffentlicht, wenn daraus ein allgemein nutzbares, nachvollziehbares Ergebnis entsteht.

## 2. Verbindliche Grundsätze

1. Jede Erweiterung wird manuell und bewusst eingeleitet.
2. `master` bleibt jederzeit produktionsfähig.
3. Änderungen erfolgen auf einem eigenen Branch und werden über einen Pull Request geprüft.
4. Kein Merge und keine produktive Änderung ohne ausdrückliche Freigabe.
5. Keine Secrets, Zugangsdaten, Kundendaten, internen Hostnamen, vertraulichen Pfade oder nicht freigegebenen Systemdetails veröffentlichen.
6. Fakten, Annahmen, offene Punkte und zeitabhängige Angaben klar unterscheiden.
7. Verweise statt inhaltlicher Duplikate verwenden.
8. Statische, lokal nachvollziehbare Lösungen bevorzugen.
9. Keine Analytics, eigenen Cookies, externen Schriftarten oder unnötigen Datenflüsse einführen.
10. Funktionsumfang und Nutzen nicht größer darstellen, als sie tatsächlich implementiert und geprüft sind.

Bei einem Konflikt zwischen diesen Regeln und einer geplanten Änderung muss der Konflikt vor der Umsetzung sichtbar gemacht und entschieden werden.

## 3. Technisches Zielbild

- Astro erzeugt vollständig statische Dateien.
- Starlight stellt Wissensnavigation, Suche und Dokumentationslayout bereit.
- Wissensinhalte liegen unter `src/content/docs/`.
- Interaktive Browser-Werkzeuge liegen unter `src/pages/werkzeuge/`.
- Wiederverwendbare Darstellung liegt in Komponenten und `src/styles/`.
- Statische Dateien liegen unter `public/`.
- `package-lock.json` ist Teil der reproduzierbaren Build-Grundlage.
- GitHub Actions validiert Pull Requests und veröffentlicht `master` nach GitHub Pages.
- `dist/` ist erzeugtes Build-Ergebnis und wird nicht manuell gepflegt.

Neue Frameworks, Backends, Datenbanken oder externe Laufzeitdienste sind keine Standarderweiterung. Sie benötigen einen belegten Anwendungsfall und eine ausdrückliche Architekturentscheidung.

## 4. Vor jeder Änderung

Vor Beginn sind mindestens diese Dateien zu prüfen:

1. `AGENTS.md`
2. `README.md`
3. `package.json`
4. `astro.config.mjs`
5. `src/content.config.ts`
6. betroffene Seiten, Komponenten, Styles und Workflows
7. offene Pull Requests, sofern sie denselben Bereich verändern

Der Arbeitsauftrag wird vor der Umsetzung auf fünf Punkte reduziert:

```text
Ziel:
Besuchernutzen:
Scope:
Nicht enthalten:
Abnahmekriterien:
```

Unklare Anforderungen dürfen nicht durch unmarkierte Annahmen ersetzt werden. Bei reversiblen Details ist eine begründete, dokumentierte Entscheidung zulässig. Bei Datenschutz, Veröffentlichung, Architektur oder irreversiblen Änderungen ist vorher eine Freigabe erforderlich.

## 5. Änderungsarten und Branches

Verwende einen kleinen, zweckgebundenen Branch:

```text
content/<thema>
feature/<funktion>
tool/<werkzeug>
design/<bereich>
fix/<problem>
platform/<infrastruktur>
docs/<dokumentation>
```

Ein Pull Request soll eine zusammenhängende Änderung enthalten. Inhalt, Design, Abhängigkeiten und Infrastruktur werden nicht ohne sachlichen Grund vermischt.

## 6. Arbeitsablauf

1. Aktuellen Stand und relevante offene Pull Requests prüfen.
2. Branch von aktuellem `master` anlegen.
3. Kleinste vollständige Lösung umsetzen.
4. Lokale oder durch GitHub Actions ausgeführte Prüfung durchführen.
5. Draft-Pull-Request früh öffnen.
6. Ziel, Besuchernutzen, Scope, Prüfungen und sichtbare Änderungen dokumentieren.
7. `Validate` erfolgreich abschließen.
8. Inhalt, Desktop, Smartphone sowie Hell- und Dunkelmodus prüfen.
9. Erst nach ausdrücklicher Freigabe mergen.
10. Deployment und Live-Seite prüfen.
11. Bei einer Regression über einen Revert- oder Fix-Pull-Request zurückrollen.

Direkte Commits auf `master` sind nur für ausdrücklich freigegebene Notfallmaßnahmen zulässig.

## 7. Regeln für öffentliche Inhalte

Jede Inhaltsseite muss ein klares Problem oder eine klare Besucherfrage beantworten.

### Inhaltliche Mindestanforderungen

- Titel und Beschreibung benennen den tatsächlichen Inhalt.
- Ergebnis oder Nutzen wird am Anfang erkennbar.
- Voraussetzungen und Grenzen werden genannt.
- Fakten und Empfehlungen werden getrennt.
- Zeitabhängige Aussagen erhalten Datum, Version oder Prüfstand.
- Primärquellen werden bevorzugt.
- Nicht belegte Aussagen werden als Einschätzung gekennzeichnet oder entfernt.
- Stabile URLs werden nach Veröffentlichung möglichst nicht geändert.

### Frontmatter

Das Schema in `src/content.config.ts` ist autoritativ. Öffentliches Frontmatter verwendet nur erforderliche Felder und hält insbesondere diese Werte ein:

- `description`: mindestens 20 Zeichen
- `doctype`: `index`, `doc`, `article`, `runbook`, `adr`, `report` oder `tool`
- `status`: `stable`, `draft`, `deprecated` oder `archived`
- `publishedAt` und `updatedAt`: nur bei tatsächlichem Bedarf
- `tags`: kurze, fachliche Begriffe; keine redundante Navigation

`draft` bedeutet inhaltlich noch nicht freigegeben. Entwürfe dürfen nicht versehentlich als belastbare Anleitung präsentiert werden.

## 8. Regeln für Browser-Werkzeuge

Ein Werkzeug wird nur aufgenommen, wenn Aufgabe, Eingabe und Ergebnis klar begrenzt sind.

Standardanforderungen:

- Verarbeitung lokal im Browser,
- kein Backend und keine dauerhafte Speicherung ohne ausdrückliche Freigabe,
- Datenfluss direkt am Werkzeug verständlich ausweisen,
- verständliche Fehlermeldungen statt stiller Fehler,
- Tastaturbedienung und mobile Nutzung,
- semantisches HTML und zugängliche Beschriftungen,
- Logik von Darstellung trennen, wenn dadurch Tests und Wartung verbessert werden,
- keine unnötige Abhängigkeit für eine kleine Funktion einführen,
- Beispiele enthalten keine realen vertraulichen Daten.

Ein Werkzeug darf keine Sicherheit, Vollständigkeit oder Normkonformität versprechen, die es nicht tatsächlich prüfen kann.

## 9. Designregeln

- Mobile-first und responsive.
- Hell- und Dunkelmodus unterstützen.
- Systemschriftarten verwenden.
- Bestehende Starlight-Muster und Designvariablen bevorzugen.
- Neue Komponenten nur bei wiederkehrendem oder eindeutigem Bedarf.
- Lesbarkeit und Informationshierarchie vor dekorativen Effekten.
- Kontrast, Fokuszustände und Bedienflächen barrierearm gestalten.
- Keine automatisch startenden Medien, Pop-ups oder aufmerksamkeitsbindenden Elemente.

## 10. Abhängigkeiten

- Abhängigkeiten exakt versionieren und Lockfile aktualisieren.
- Neue Abhängigkeiten nur bei erkennbarem Mehrwert und vertretbarer Wartungslast.
- Vor einer neuen Abhängigkeit prüfen, ob Astro, Starlight oder Browser-APIs die Aufgabe bereits lösen.
- Versionsupdates in isolierten Pull Requests durchführen.
- Release Notes und offizielle Dokumentation prüfen.
- Keine automatischen Major-Upgrades oder automatischen Merges.
- Entfernte Abhängigkeiten vollständig aus Code, Konfiguration und Lockfile bereinigen.

## 11. Qualitätsprüfung

Mindestens ausführen:

```bash
npm ci
npm run build
```

Sobald eigenständige Typ-, Link-, Unit- oder Browsertests vorhanden sind, werden sie verpflichtender Teil von `Validate` und dieser Abschnitt wird aktualisiert.

Zusätzlich manuell prüfen:

- Startseite und betroffene direkte URL,
- Navigation und interne Links,
- Smartphone und Desktop,
- Hell- und Dunkelmodus,
- Tastaturbedienung bei interaktiven Elementen,
- verständliche leere, gültige und fehlerhafte Eingaben bei Werkzeugen,
- keine sichtbaren internen oder vertraulichen Informationen,
- Metadaten, Überschriften und Linktexte.

## 12. Definition of Done

Eine Änderung ist erst abgeschlossen, wenn:

- der Besuchernutzen benannt und sichtbar ist,
- die Abnahmekriterien erfüllt sind,
- keine sachfremden Änderungen enthalten sind,
- der Produktionsbuild erfolgreich ist,
- sichtbare Änderungen auf relevanten Bildschirmgrößen geprüft wurden,
- Datenschutz und Sicherheitsgrenzen eingehalten sind,
- Dokumentation und Navigation bei Bedarf angepasst wurden,
- der Pull Request eine nachvollziehbare Zusammenfassung enthält,
- der Merge ausdrücklich freigegeben wurde,
- das Deployment erfolgreich war und die Live-Seite geprüft wurde.

## 13. Entscheidungen und Weiterentwicklung

Eine kurze ADR ist erforderlich, wenn mindestens einer dieser Punkte geändert wird:

- Static-Site-Generator oder grundlegende Architektur,
- Hosting- oder Deploymentmodell,
- Datenschutz- oder Datenflussmodell,
- Einführung eines Backends oder externen Laufzeitdienstes,
- dauerhaftes öffentliches URL-Schema,
- wesentliche neue Framework- oder Plattformabhängigkeit.

ADRs werden bei Bedarf unter `docs/adr/` angelegt. Sie dokumentieren Kontext, Entscheidung, Folgen und verworfene Alternativen.

Kleine Inhalte, Fehlerkorrekturen und vorhandene Muster erweiternde Werkzeuge benötigen keine ADR.

## 14. Betrieb und Rückbau

`master` löst den Workflow `Deploy to GitHub Pages` aus. GitHub Pages muss als Quelle **GitHub Actions** verwenden.

Bei einem Fehler:

1. fehlerhaften Workflow und betroffenen Commit identifizieren,
2. Ursache im Quellstand beheben — niemals im erzeugten `dist/`,
3. bei unmittelbarer Live-Regression den verursachenden Merge revertieren,
4. Fix erneut über Branch, Pull Request und Validierung ausliefern,
5. Live-Seite nach dem Deployment prüfen.

## 15. Verhalten von KI-Agenten

KI-Agenten müssen:

- diese Datei vor Änderungen lesen,
- Repository-Fakten vor Behauptungen prüfen,
- aktuelle technische Angaben anhand offizieller Quellen verifizieren,
- Fakten, Schlussfolgerungen und Annahmen unterscheiden,
- vorhandene Muster bevorzugen,
- keine Dateien, Einstellungen oder Ergebnisse erfinden,
- keine Secrets anfordern oder in Ausgaben übernehmen,
- keinen Merge, kein Deployment und keine Repository-Einstellung ohne ausdrücklichen Auftrag verändern,
- nach der Arbeit Branch, Pull Request, Prüfstatus und offene manuelle Schritte nennen.

KI-Agenten dürfen den Scope nicht eigenmächtig auf angrenzende Verbesserungen ausweiten. Erkannte Folgethemen werden als Vorschlag oder separater Backlogpunkt festgehalten.

## 16. Pflege dieser Anweisungen

Diese Datei wird geändert, wenn sich eine dauerhaft geltende Projektregel, Architekturgrenze oder Qualitätsanforderung ändert. Kurzfristige Aufgaben, Ideen und einmalige Entscheidungen gehören nicht hierher.

Änderungen an `AGENTS.md` erfolgen selbst über einen separaten Pull Request und benötigen ausdrückliche Freigabe.