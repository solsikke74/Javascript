var button = document.querySelector("button");
var box = document.getElementById("ChangeMe");

function ChangeColor() {
    if (box.style.backgroundColor == "#778DA9") {
        box.style.backgroundColor = "#0D1B2A";
    }else {
        box.style.backgroundColor = "#778DA9";
    }
}