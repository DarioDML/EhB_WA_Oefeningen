// Voorbeeld start-code
let score = 0;
let naam = prompt("Wat is je naam?");
alert("Welkom bij de quiz, " + naam);
// Stel hier je vragen...

let antwoord1 = prompt("Hoe noem je een herhalende structuur in code?");
let juistAntwoord1 = "Loop";
if (antwoord1.toLowerCase() === juistAntwoord1.toLowerCase()) {
    alert("Goed gedaan!");
    score++;
} else {
    alert("Fout, het juiste antwoord was: " + juistAntwoord1);
}

let antwoord2 = prompt("Welke taal wordt veel gebruikt voor webontwikkeling naast HTML en CSS?");
let juistAntwoord2 = "JavaScript";
if (antwoord2.toLowerCase() === juistAntwoord2.toLowerCase()) {
    alert("Goed gedaan!");
    score++;
} else {
    alert("Fout, het juiste antwoord was: " + juistAntwoord2);
}

let antwoord3 = prompt("Hoe noem je een fout in code die ervoor zorgt dat het programma crasht?");
let juistAntwoord3 = "Bug";
if (antwoord3.toLowerCase() === juistAntwoord3.toLowerCase()) {
    alert("Goed gedaan!");
    score++;
} else {
    alert("Fout, het juiste antwoord was: " + juistAntwoord3);
}

// Hou de score bij...


// Toon het resultaat...
alert("Je score is: " + score);