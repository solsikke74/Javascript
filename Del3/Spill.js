const div = document.querySelector(".ChangeMe"); 

const text = " SYSTEM STATUS: KRITISK FEIL [0x889F] Året er 2030. Du sitter ved terminalen på medielaboratoriet på skolen da skjermen plutselig blir svart. Sekundet etter flimrer et neongrønt tekstvindu frem: Hjelp oss! Skolens sentrale database er utsatt for et massivt løsepenge-angrep. Alle eksamener, filmprosjekter og skoledokumenter blir slettet om 30 minutter. Som VG1 IM-elev er du den eneste i bygningen med den tekniske og kreative kompetansen til å stoppe hackergruppen 0day-Cyber. Hva gjør du først? Du må skaffe deg tilgang til skolens hovedtjener (server). Klikk på knappen under for å få opp valgene dine. ";

function ChangeColor() {
  const spillDiv = document.querySelector(".ChangeMe");
  
  // 1. Gjør boksen synlig ved å fjerne hidden-klassen
  spillDiv.classList.remove("hidden");
  
  // 2. Tøm elementet for gammel tekst før vi starter
  spillDiv.textContent = "";
  
  // 3. Start skriveeffekten
  textTypingEffect(spillDiv, text);
}

function textTypingEffect(element, text, i = 0) {
  // 1. Sjekk om vi har skrevet ut hele teksten
  if (i >= text.length) {
    return; // Avslutt funksjonen når vi er ferdige
  }

  // 2. Legg til ÉN ny bokstav
  element.textContent += text[i];

  // 3. Vent 70ms og kall funksjonen på nytt med neste indeks (i + 1)
  setTimeout(() => textTypingEffect(element, text, i + 1), 70);
}