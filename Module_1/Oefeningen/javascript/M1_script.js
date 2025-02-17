
const speciaal = document.querySelectorAll(".special")
const aantal = document.getElementById('output')

speciaal.forEach (element => {
    element.style.color = "red"
})

const paragraaf = document.querySelector("p:nth-child(2)")
paragraaf.style.textDecoration = "underline";


aantal.innerText = speciaal.length



