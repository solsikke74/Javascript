function lagVisittkort() { 

let navn = prompt("Hva heter du?"); 

let alder = prompt("Hvor gammel er du?"); 

let farge = prompt("Hva er favorittfargen din?"); 

document.getElementById("ChangeMe").innerHTML =
"Visittkort    " + "<br>" +
"Navn: " + navn + "<br>" +
"Alder: " + alder + "<br>" +
"Favorittfarge: " + farge;
}