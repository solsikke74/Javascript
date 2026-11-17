function Hei() { 

    document.getElementById("demo").innerHTML = 

        "Hei verden!"; 

}  

function ByttTekst() {

    document.getElementById("demo").innerHTML =
        "Teksten er byttet!";
}

let navn = "Anne";

document.getElementById("navn").innerHTML = navn;

function lagVisittkort() {    
    let navn = prompt("Hva heter du?"); 
    let alder = prompt("Hvor gammel er du?"); 
    let farge = prompt("Hva er favorittfargen din?"); 

    document.getElementById("visittkort").innerHTML = 

    "Hei! Jeg heter " + navn + ".<br>" + 
    "Jeg er " + alder + " år gammel.<br>" + 
    "Favorittfargen min er " + farge + "."; 
} 