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
    const cof = (brewVal / strengthVal) - absorption.average;
    coffee.innerText = cof.toPrecision(1);
    const wat = (brewVal + absorption.average * cof);
    water.innerText = wat.toPrecision(1);
};