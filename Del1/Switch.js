var button = document.querySelector("button");
var box = document.getElementById("ChangeMe");

function ChangeColor() {
    if (box.style.background == "rgb(119, 141, 169)") { /*HEX fungerer helt fint i JS. */
        box.style.background = "#0D1B2A";               /*Problem oppstår bare når du prøver å lese fargen tilbake.*/
    }else {                                               /*  CSS → JS gir alltid RGB, og en bestemt RGB.*/
        box.style.background = "#778DA9";
    }
}                                                       
