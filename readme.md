# Mein Webprojekt mit Registeranbindung

Dieses Projekt ist eine Webanwendung, die eine Registeranfrage durchführt. Es ist auch ein in AWS implementierter Service, der Registeranfragen beantworten kann. 

## Beschreibung

Beschreibe hier kurz und prägnant, was deine Webanwendung tut und welchen Zweck sie erfüllt. Zum Beispiel:

> Diese Webanwendung ermöglicht es Benutzern, IDNr anzugeben und als Antwort aus einem Register Vorname, Nachname und Geburtsdatum zu bekommen.

## Technologien

Technologien auf, die in diesem Projekt verwendet werden:

*   **Frontend:** Vue.js, HTML, CSS
*   **Backend:** AWS Lambda, API Gateway
*   **Sonstige:** Axios (für HTTP-Anfragen)

## Installation

Aktivitäten um das Projekt lokal einzurichten:

Hier zunächst nur als Beispiel, die Daten sind noch nicht korrekt.

1.  Klone das Repository:
    ```bash
    git clone [https://github.com/your-username/your-repository.git](https://github.com/your-username/your-repository.git)
    ```

2.  Navigiere zum Projektordner:
    ```bash
    cd my-website
    ```

3.  Installiere die Abhängigkeiten für die Webseite:
    ```bash
    cd website
    npm install
    ```

4.  Installiere die Abhängigkeiten für die Lambda-Funktion:
    ```bash
    cd lambda
    npm install
    ```

## Verwendung

Die Webanwendung wird wie folgt gestartet und genutzt.

1.  Starte den lokalen Entwicklungsserver für die Webseite:
    ```bash
    cd website
    npm run serve
    ```

2.  Die Webanwendung sollte nun unter `http://localhost:8080` verfügbar sein.

## API-Endpunkte

De Webanwendung verwendet folgende API-Endpunkte.

*   `POST /Melderegisterauskunft`: Ruft die persönlichen Daten eines Benutzers anhand seiner IDNR ab.

## Lambda-Funktion

Die AWS-Lambda-Funktion enthält die Anfrage und führt eine Datenbank-Abfrage durch.

## Deployment

Die Webanwendung wird auf AWS S3 bereitgestellt.
Die Webanwendung ruft die im AWS API-Gateway veröffentlichte APIs
Die Lambda-Funktion wird vom AWS API-Gateway aufgerufen und führt eine Datenbankabfrage durch.

## Contributing

Ich würde mich über Ideen und Anregungen freuen. Der Schwerpunkt liegt auf einer modernen Architektur, die alle Sicherheitsanforderungen erfüllt und nicht auf einem fachlich/inhaltlichen Feinschliff.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.

## Kontakt

Bei Fragen oder Anregungen kontaktiere mich über lars@santesson.eu
