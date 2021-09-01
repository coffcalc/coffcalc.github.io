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
    brewVal = parseInt(brew.value);
    strengthVal = parseInt(strength.value);
    const cof = brewVal / (strengthVal - absorption.average);
    const wat = brewVal + absorption.average * cof;
    if (!isNaN(cof) && !isNaN(wat)) {
        coffee.innerText = Math.round((cof + Number.EPSILON) * 10) / 10;
        water.innerText = Math.round((wat + Number.EPSILON) * 10) / 10;
    }
};