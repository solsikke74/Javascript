var button = document.querySelector("button");
var box = document.getElementById("ChangeMe");

function ChangeColor() {
    if (box.style.background == "rgb(119, 141, 169)") {
        box.style.background = "#0D1B2A";
    }else {
        box.style.background = "#778DA9";
    }
}