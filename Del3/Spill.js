const text = " SYSTEM STATUS: KRITISK FEIL [0x889F] Året er 2030. Du sitter ved terminalen på medielaboratoriet på skolen da skjermen plutselig blir svart. Sekundet etter flimrer et neongrønt tekstvindu frem: Hjelp oss! Skolens sentrale database er utsatt for et massivt løsepenge-angrep. Alle eksamener, filmprosjekter og skoledokumenter blir slettet om 30 minutter. Som VG1 IM-elev er du den eneste i bygningen med den tekniske og kreative kompetansen til å stoppe hackergruppen 0day-Cyber. Hva gjør du først? Du må skaffe deg tilgang til skolens hovedtjener (server). Klikk på knappen under for å få opp valgene dine. ";
const text2 = "Du har kommet deg inn på skolens server. Hackerne har startet en nedtellingsprosess som overskriver filer i sanntid.";

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
    visValg(); // Kall funksjonen for å vise valgene når teksten er ferdig skrevet
    return; // Avslutt funksjonen når vi er ferdige
  }

  // 2. Legg til ÉN ny bokstav
  element.textContent += text[i];

  // 3. Vent 70ms og kall funksjonen på nytt med neste indeks (i + 1)
  setTimeout(() => textTypingEffect(element, text, i + 1), 0);
}
  
// Funksjon som kalles KUN når skriveeffekten er 100% ferdig
function visValg() {
  const valgBoks = document.querySelector(".valg-container");
  
  // Gjør valg-containeren synlig
  if (valgBoks) {
    valgBoks.classList.remove("hidden");
  }
}

function velgOption(valg) {
  const spillDiv = document.querySelector(".ChangeMe");
  const valgBoks = document.querySelector(".valg-container");

  // 1. Skjul valgknappene mens den nye teksten skrives ut
  if (valgBoks) {
    valgBoks.classList.add("hidden");
  }

  if (valg === 1) {
    // 2. Tøm boksen
    spillDiv.textContent = "";

    // 3. Start skriveeffekten på nytt med text2!
    textTypingEffect(spillDiv, text2);

  } else if (valg === 2) {
    alert("Du valgte alternativ 2!");
  } else if (valg === 3) {
    alert("Du valgte alternativ 3!");
  }
}