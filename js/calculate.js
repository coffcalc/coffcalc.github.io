import { absorption } from "./constans.js";

const brew = document.getElementById("brew");
let brewVal = parseInt(brew.value);
const strength = document.getElementById("strength");
let strengthVal = parseInt(strength.value);
const coffee = document.getElementById("coffee");
const water = document.getElementById("water");

brew.addEventListener('change', calculate);
strength.addEventListener('change', calculate);


function calculate() {
    brewVal = brew.value;
    strengthVal = strength.value;
    const cof = (brewVal / strengthVal) - absorption.average;
    coffee.innerText = cof.toFixed(1);
    water.innerText = (brewVal + absorption.average * cof).toFixed(1);
};