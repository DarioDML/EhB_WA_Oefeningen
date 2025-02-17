'use strict';

const body = document.body
const knop = document.getElementById("themaKnop")
const header1 = document.querySelector("h1") //getElementsByTagName werkt niet
const paragraph = document.querySelector("p")
const link = document.querySelector("a")
let theme = "light"



knop.addEventListener("click", function () {
    if (theme === "light") {
        knop.textContent = "Licht thema";

        body.style.backgroundColor = "black";
        header1.style.color = "white";
        paragraph.style.color = "white";
        link.style.color = "white";
        theme = "dark"
    } else {
        knop.textContent = "Donker thema";

        body.style.backgroundColor = "white";
        header1.style.color = "black";
        paragraph.style.color = "black";
        link.style.color = "black";
        theme = "light"
    }
})
