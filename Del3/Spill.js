const div = document.querySelector(".ChangeMe"); // Henter klassen "ChangeMe" fra html filen.

const text=" SYSTEM STATUS: KRITISK FEIL [0x889F] Året er 2030. Du sitter ved terminalen på medielaboratoriet på skolen da skjermen plutselig blir svart. Sekundet etter flimrer et neongrønt tekstvindu frem: Hjelp oss! Skolens sentrale database er utsatt for et massivt løsepenge-angrep. Alle eksamener, filmprosjekter og skoledokumenter blir slettet om 30 minutter. Som VG1 IM-elev er du den eneste i bygningen med den tekniske og kreative kompetansen til å stoppe hackergruppen 0day-Cyber. Hva gjør du først? Du må skaffe deg tilgang til skolens hovedtjener (server).  Klikk på knappen under for å få opp valgene dine. ";


function ChangeColor() {
  // 1. Finn elementet med id ".ChangeMe"
  const spillDiv = document.querySelector(".ChangeMe"); //Bruk const for å deklarere en konstant variabel som ikke kan endres senere. Dette er nyttig for å sikre at referansen til elementet forblir den samme gjennom funksjonen. 
                                                        //querySelector henter klassen "ChangeMe" fra html filen.
  // 2. Tøm elementet for gammel tekst
  spillDiv.textContent = "";
  
  // 3. Start skriveeffekten!
  textTypingEffect(spillDiv, text);
}


function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i]; // Legger til teksten i elementet med en skriveeffekt. textContent brukes for å sette eller hente tekstinnholdet til et element. Her brukes det for å legge til en ny bokstav fra teksten til elementet.

    if (i === 0)    { // Sjekker om i er lik 0, som betyr at vi er i starten av teksten.
        element.textContent = ""; // Hvis vi er i starten av teksten, tømmer vi innholdet i elementet for å starte med en tom tekst.
    }   

    if (i >= text.length ) {// Sjekker om vi har nådd slutten av teksten. Hvis i er lik lengden på teksten minus 1, betyr det at vi har skrevet ut hele teksten.
        return; // Hvis vi har nådd slutten av teksten, avslutter vi funksjonen.         
        }

     // Legg til gjeldende tegn
  element.textContent += text[i];

  // Kalle funksjonen på nytt etter 70ms for neste tegn
  setTimeout(() => textTypingEffect(element, text, i + 1), 70);



  // Legg til gjeldende tegn
  element.textContent += text[i];

  // Kalle funksjonen på nytt etter 70ms for neste tegn
  setTimeout(() => textTypingEffect(element, text, i + 1), 70);
}