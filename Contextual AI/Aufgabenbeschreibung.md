# Einleitung Contextual AI

Durch moderne KI-Chatbots sind Möglichkeiten eröffnet, komplexe Aufgaben und Herausforderungen sehr viel schneller 
und effizienter zu absolvieren. Um präzise Antworten oder Ergebnisse zu liefern, die vom Nutzer angefragt werden, 
benötigten KI-Tools jedoch Kontext. Je größer und komplexer die Herausforderung, desto mehr Kontext wird vom Tool gebraucht, 
um eine korrekte und sinnvolle Antwort zu liefern.

Ist dies nicht der Fall, sind die Antworten meist sehr generell gehalten, 
enthalten Fehler oder sind für den Nutzer unbrauchbar. Das werdet ihr in dieser Aufgabe ausprobieren. 
Ihr werdet insgesamt zwei Iterationen durchführen, um ein ausführbares SQL Programm mittels eines KI-Tools zu erstellen. 
In der ersten Iteration ist euch nur eine sehr begrenzte Anzahl an Wörtern erlaubt, die ihr dem KI-Tool zur Verfügung stellen 
könnt. In der zweiten Iteration könnt ihr dann so viele Wörter verwenden, wie ihr möchtet. 

## Zeit

Die Zeit zum Bearbeiten dieser Aufgabe (beide Iterationen) beträgt 35 Minuten.

## Aufgabenbeschreibung

### Schritt 1

Findet euch in euer Gruppe zusammen.

### Schritt 2

Sucht euch ein KI-Chatbot euerer Wahl aus. Wir empfehlen:
* ChatGPT: https://chat.openai.com/
* Perplexity AI: https://www.perplexity.ai/
* GPTGo: https://gptgo.ai/en#google_vignette
* zzzcode.ai: https://zzzcode.ai

Sucht euch einen Online Editor für Datenbanken aus. Wir empfehlen:

https://www.programiz.com/sql/online-compiler/ , in welcher die benötigten Tabellen bereits zur Verfügung stehen

### Schritt 3

Erstellt ein SQL Programm, welches die im Anschluss dargestellten zwei Tabellen zusammenfügt. Die zusammengefügte 
Tabelle darf nur die folgenden Spalten mit den entsprechenden Inhalten enthalten: first_name, last_name, age und status.

Tabelle: Customer

| customer_id | first_name | last_name | age |
| ---------- | ----------- | --------- | --- |
|     1      |     John    |    Doe    |  31 |
|     2      |     Robert  |    Luna   |  22 |
|     3      |     David   |  Robinson |  22 |
|     4      |     John    | Reinhardt |  25 |
|     5      |     Betty   |    Doe    |  28 |

Tabelle: Shipping

| shipping_id |   Status   | customer  |
| ---------- | ----------- | --------- |
|     1      |    Pending  |  2  | 
|     2      |    Pending  |  4  |
|     3      |   Delivered |  3  | 
|     4      |    Pending  |  5  | 
|     5      |   Delivered |  1  | 

Wichtig ist hierbei, dass der Status aus Tabelle 2 dem jeweiligen Customer aus Tabelle 1 korrekt zugeordnet wird.
### Schritt 4

Die folgenden Regeln müssen zur Erstellung der Lösung zusätzlich bedacht werden:

1. Ihr müsst für die Erstellung der Lösung ein KI-Tool verwenden!

2. Ihr habt 20 Minuten nach dem Starten der Aufgabe Zeit, um eine erste Version des Programms zu erstellen. Ihr dürft für die Erstellung der Lösung maximal 15 Wörter verwenden (Wörter müssen mit Leerzeichen getrennt werden!), welche in das Textfeld des KI-Tools eingeben werden kann. Falls ihr Fragen an das KI-Tool habt, dürft ihr pro Frage maximal 10 Wörter verwenden. Um das Verfolgen der maximal genutzten Wörter zu vereinfachen, empfehlen wir einen Word Counter: https://wordcounter.net/.
3. Euch wird kurz vor dem Zeitablauf für die erste Iteration des Programms vom Workshop-Veranstalterteam Bescheid gegeben, dass ihr demnächst mit der zweiten Iteration weitermachen sollt. Falls ihr nicht fertig geworden seid ist das kein Problem, behaltet eure Gedanken jedoch für Schritt 5 in Erinnerung.
4. Ihr habt nun 15 Minuten Zeit, um eine zweite Version der Lösung zu erstellen oder zu verbessern. Diesmal könnt ihr so viele Wörter an den Chatbot richten, wie ihr möchtet. Sowohl für die Erstellung der Lösung, als auch für Fragen an das KI-Tool.
5. Euch wird kurz vor dem Zeitablauf der zweiten Iteration des Programms vom Workshop-Veranstalterteam Bescheid gegeben, dass ihr bitte eure Gedanken innerhalb von 5 Minuten notiert, die ihr im Anschluss den anderen Gruppen vorstellt (Ihr werdet Gruppe nach Gruppe aufgerufen). Falls ihr nicht fertig geworden seid, ist das kein Problem, behaltet eure Gedanken jedoch für Schritt 5 in Erinnerung.
   
### Schritt 5

Von den Workshop-Veranstaltern wird nach der angegebenen Zeit zum Bearbeiten dieser Aufgabe eine Diskussionsrunde eingeleitet, an welchem ihr teilnehmen sollt. Es wird zuerst nach freiwilligen Gruppen zur Teilnahme an der Diskussionsrunde gefragt, ansonsten würde eine zufällige Gruppe aufgerufen werden. In der Diskussionsrunde können folgende Aspekte erfragt werden, versucht demnach auf diese zu achten:

* Hat das Erstellen der Software in beiden Iterationen funktioniert?
* Welche Herausforderungen/Probleme gab es? 
* Hättet ihr diese Aufgabe ohne die Hilfe des KI-Chatbots bewältigen können?
* Denkt ihr, dass die Nutzung des Chatbots effektiver war, als die eigene Recherche?

### Für die Schnellen

Falls ihr bereits vor der Bearbeitungszeit mit Schritt 1-4 fertig seid, könnt ihr mit unterschiedlichen KI-Chatbots die beiden Iterationen erneut durchgehen und die Ergebnisse vergleichen. Gegen Ende der Diskussionsrunde wird gefragt, ob eine Gruppe weitere KI-Tools für die Erstellung weiterer Programmversionen zum Zusammenfügen der zwei SQL-Tabellen genutzt und Ergänzungen hat.

## Abhängigkeiten

Benötigt wird für die Inhalte der Tabellen eine Datenbank. Dies ist einfach über einen Online Editor 
(SQL, PostgreSQL, Oracle, etc.) möglich.

Wir empfehlen für diese Aufgabe: https://www.programiz.com/sql/online-compiler/ , welches die richtigen Tabellennamen und Typen bereits verfügbar hält. 
