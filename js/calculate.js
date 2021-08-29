import { absorption } from "./constans.js";

const brew = document.getElementById("brew");
const brewVal = parseInt(brew.value);
const strength = document.getElementById("strength");
const strengthVal = parseInt(strength.value);
const coffee = document.getElementById("coffee");
const water = document.getElementById("water");

brew.addEventListener('input', calculate);
strength.addEventListener('input', calculate);


function calculate() {
    const cof = (brewVal / strengthVal) - absorption.average;
    coffee.innerText = cof;
    water.innerText = brewVal + absorption.average * cof;
};