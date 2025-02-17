'use strict';

const loadingMessage = document.getElementById("loadingMessage")

window.addEventListener("load", function () {

    // Verander de tekst naar "Welcome!" zodra alles geladen is
    loadingMessage.textContent = "Welcome!";

    // Na 2 seconden, verberg de div
    setTimeout(function () {
        loadingMessage.style.display = "none";
    }, 2000);
});