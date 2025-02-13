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
  
      console.log("Response Status:", response.status); // Status der Antwort loggen
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json(); // API Antwort als JavaScript-Objekt
      console.log("API Antwort:", data); // Gesamte API Antwort loggen
  
      // Parsen des JSON-Strings im "body"-Feld
      const responseBody = JSON.parse(data.body); 
  
      // Überprüfen, ob die Antwort die erwarteten Felder enthält
      document.getElementById("antwort").innerHTML = `
        <p>Vorname: ${responseBody.vorname}</p>
        <p>Nachname: ${responseBody.nachname}</p>
        <p>Geburtsdatum: ${responseBody.geburtsdatum}</p>
      `;
    } catch (error) {
      console.error("Fehler beim Abrufen der Auskunft:", error);
      document.getElementById("antwort").innerHTML =
        "<p>Fehler beim Abrufen der Auskunft.</p>";
    }
  }
  