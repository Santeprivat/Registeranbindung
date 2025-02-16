import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";

// DynamoDB Client initialisieren
const ddbClient = new DynamoDBClient({ region: "eu-central-1" });

export const handler = async (event) => {
  try {
    console.log("Event:", JSON.stringify(event));

    // Falls event.body ein String ist, dann parsen
    const requestBody = typeof event.body === "string" ? JSON.parse(event.body) : event.body;

    const idnr = requestBody.idnr;

    if (!idnr) {
      return {
        statusCode: 400, // 400 Bad Request, wenn idnr fehlt
        body: JSON.stringify({ message: "Missing 'idnr' in request body" }),
      };
    }

    // DynamoDB nach der idnr durchsuchen
    const params = {
      TableName: "Melderegister",
      Key: {
        idnr: { S: idnr }, // idnr als Schlüssel
      },
    };

    // DynamoDB GetItemCommand ausführen
    const command = new GetItemCommand(params);
    const data = await ddbClient.send(command);

    // Wenn keine Daten gefunden werden, gebe 204 No Content zurück
    if (!data.Item) {
      return {
        statusCode: 204, // 204 No Content, wenn keine Daten gefunden
      };
    }

    // Wenn Daten gefunden werden, sende die Antwort zurück
    const responseBody = {
      vorname: data.Item.vorname.S, // Beispiel, wie man auf das Attribut zugreift
      nachname: data.Item.nachname.S,
      geburtsdatum: data.Item.geburtsdatum.S,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(responseBody),
    };
  } catch (error) {
    console.error("Fehler:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};