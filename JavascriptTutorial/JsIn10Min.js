var button = document.querySelector("button");
var box = document.getElementById("ChangeMe");

function ChangeColor() {
    if (box.style.background == "red") {
        box.style.background = "#415A77";
    }else {
        box.style.background = "red";
    }
}