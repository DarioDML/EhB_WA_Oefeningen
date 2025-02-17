"use strict";
let getal1 = document.getElementById("getal1")
let getal2 = document.getElementById("getal2")

let bereken = document.getElementById("bereken")

let resultaat = document.getElementById("resultaat")


bereken.addEventListener("click", function () {
    let get1 = Number(getal1.value) // om te zeggen dat het een getal is en enkel dus getallen neemt in diet invoerveld
    let get2 = Number(getal2.value)

    resultaat.textContent = get1 + get2
})