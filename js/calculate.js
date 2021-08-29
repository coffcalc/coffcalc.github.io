import { absorption } from "./constans";

const brew = document.getElementById("brew");
const strength = document.getElementById("strength");
const coffee = document.getElementById("coffee");
const water = document.getElementById("water");

brew.addEventListener('input', calculate)
strength.addEventListener('input', calculate)


function calculate() {
    const cof = (brew / strength) - absorption.average;
    coffee.innerText = cof;
    water.innerText = brew + absorption.average * cof;
}

var title = document.getElementsByTagName('h1')[0];

title.addEventListener('click', () => {
    title.style.color = "red";
})