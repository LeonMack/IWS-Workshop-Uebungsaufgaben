# Einleitung Contextual AI

Durch moderne KI-Chatbots sind Möglichkeiten eröffnet, komplexe Aufgaben und Herausforderungen sehr viel schneller 
und effizienter zu absolvieren. Um präzise Antworten oder Ergebnisse zu liefern, die vom Nutzer angefragt werden, 
benötigten KI-Tools jedoch Kontext. Je größer und komplexer die Herausforderung, desto mehr Kontext wird vom Tool gebraucht, 
um eine korrekte und sinnvolle Antwort zu liefern.

Ist dies nicht der Fall, sind die Antworten meist sehr generell gehalten, 
enthalten Fehler oder sind für den Nutzer unbrauchbar. Das wirst du in dieser Aufgabe ausprobieren. 
Du wirst insgesamt zwei Iterationen durchführen, um ein ausführbares SQL Programm mittels eines KI-Tools zu erstellen. 
In der ersten Iteration ist dir nur eine sehr begrenzte Anzahl an Wörtern erlaubt, die du dem KI-Tool zur Verfügung stellen 
kannst. In der zweiten Iteration kannst du dann so viele Wörter verwenden, wie du möchtest. 

## Gruppengröße

Personen pro Gruppe zum bearbeiten dieser Aufgabe: 3-4 Personen.

## Zeit

Die Zeit zum bearbeiten dieser Aufgabe beträgt 40 Minuten.


## Aufgabenbeschreibung

### Schritt 1

Finde dich in einer Gruppe zusammen. Die Gruppengröße ist am Ende dieses Dokuments angegeben.

### Schritt 2

Sucht euch ein KI-Chatbot euerer Wahl aus. Wir empfehlen:
* ChatGPT: https://chat.openai.com/
* Perplexity AI: https://www.perplexity.ai/
* GPTGo: https://gptgo.ai/en#google_vignette
* zzzcode.ai: https://zzzcode.ai

Sucht euch einen Online Editor für Datenbanken aus. Wir empfehlen:

https://www.programiz.com/sql/online-compiler/ , in welcher die benötiogten Tabellen bereits zur Verfügung stehen

### Schritt 3

Erstellt ein SQL Programm, welches die im Anschluss dargestellten zwei Tabellen zusammenfügt. Die zusammengefügte 
Tabelle sollte die folgenden Spalten beinhalten: first_name, last_name, age und status.

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

Wichtig ist hierbei, dass der Status aus Tabelle 2 je nach Kunde korrekt sortiert ist.
### Schritt 4

Die folgenden Regeln müssen zur Erstellung der Lösung zusätzlich bedacht werden:

1. Ihr müsst für die Erstellung der Lösung ein KI-Tool verwenden!

2. Ihr habt insgesamt 15 Minuten Zeit, um eine erste Version des Programms zu erstellen. Ihr dürft für die Erstellung der Lösung maximal 25 Wörter verwenden, welche in das Textfeld des KI-Tools eingeben werden kann. Falls ihr Fragen an das KI-Tool habt, dürft ihr pro Frage maximal 15 Wörter verwenden. 

3. Ihr habt erneut 20 Minuten Zeit, um eine zweite Version der Lösung zu erstellen oder zu verbessern. Diesmal könnt ihr so viele Wörter verwenden, wie ihr möchtet. Sowohl für die Erstellung der Lösung, als auch für Fragen an das KI-Tool.

4. Die Ergebnistabelle kann in beliebiger Reihenfolge zurückgegeben werden.
   
### Schritt 5

Die Gruppen werden von den Workshop-Veranstaltern darüber informiert, wenn die Zeit vorbei ist. Teilt eure Gedanken 
zur Aufgabe im Anschluss in einer Diskussionsrunde den anderen Gruppen mit folgenden Ansprechpunkten:

* Hat das Erstellen der Software in beiden Iterationen funktioniert?
* Welche Herausforderungen/Probleme gab es? 
* Haben Sie die Lösungen des KI-Tools verstanden?

## Abhängigkeiten

Benötigt wird für die Inhalte der Tabellen eine Datenbank. Dies ist einfach über einen Online Editor 
(SQL, PostgreSQL, Oracle, etc.) möglich.

Wir empfehlen für diese Aufgabe: https://www.programiz.com/sql/online-compiler/ , welches die richtigen Tabellennamen und Typen bereits verfügbar hält. 
