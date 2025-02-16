async function getAuskunft() {
    const idnr = document.getElementById("idnr").value;

    try {
        const response = await fetch(
            "https://z9y15u2otc.execute-api.eu-central-1.amazonaws.com/Test/Melderegisterauskunft",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ idnr: idnr }),
            }
        );

        const data = await response.json(); // Parse the JSON response

        console.log("Lambda Antwort:", data); // Log the Lambda response object

        if (data.statusCode === 204) { // Access statusCode property of the object
            document.getElementById("antwort").innerHTML =
                "<p>Keine Daten für diese IDNR gefunden.</p>";
        } else if (data.statusCode !== 200) { // Check for non-200 status codes
            throw new Error(`Lambda returned error status: ${data.statusCode}`);
        } else {
            const responseBody = data.body ? JSON.parse(data.body) : data; // Handle empty body

            document.getElementById("antwort").innerHTML = `
                <p>Vorname: ${responseBody.vorname}</p>
                <p>Nachname: ${responseBody.nachname}</p>
                <p>Geburtsdatum: ${responseBody.geburtsdatum}</p>
            `;
        }
    } catch (error) {
        console.error("Fehler beim Abrufen der Auskunft:", error);
        document.getElementById("antwort").innerHTML =
            "<p>Fehler beim Abrufen der Auskunft.</p>";
    }
}