import { absorption } from "./constans";

const brew = document.getElementById("brew");
const strength = document.getElementById("strength");
const coffee = document.getElementById("coffee");
const water = document.getElementById("water");

brew.addEventListener('input', calculate);
strength.addEventListener('input', calculate);


function calculate() {
    // const cof = (brew / strength) - absorption.average;
    const cof = (brew / strength) - 2.1;
    coffee.innerText = cof;
    // water.innerText = brew + absorption.average * cof;
    water.innerText = brew + 2.1 * cof;
};

var title = document.getElementsByTagName('h1')[0];

title.addEventListener('click', () => {
    title.style.color = "red";
});

title.addEventListener('click', e => {alert("elo")});

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});