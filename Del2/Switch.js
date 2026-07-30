var button = document.querySelector("button");
var box = document.getElementById("ChangeMe");

function ChangeColor() {
    let current = getComputedStyle(box).backgroundColor;

    switch (current) {  
        case "rgb(119, 141, 169)":
            box.style.background = "rgb(13, 27, 42)";
            break;

        case "rgb(13, 27, 42)":
            box.style.background = "rgb(27, 38, 59)";
            break;

        case "rgb(27, 38, 59)":
            box.style.background = "rgb(224, 225, 221)";
            break;

        case "rgb(224, 225, 221)":
            box.style.background = "rgb(65, 90, 119)";
            break;

        case "rgb(65, 90, 119)":
            box.style.background = "rgb(119, 141, 169)";
    }
}
                                                     
