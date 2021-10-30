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

const brewBtn = document.getElementById("brew-btn");
const coffeeBtn = document.getElementById("coffee-btn");
const brewInputCon = document.getElementById("brew-input-con");
const coffeeInputCon = document.getElementById("coffee-input-con");

brewBtn.addEventListener('click', switchFields);
coffeeBtn.addEventListener('click', switchFields);

function switchFields() {
    brewBtn.classList.toggle("clicked");
    coffeeBtn.classList.toggle("clicked");
    brewInputCon.classList.toggle("hidden");
    coffeeInputCon.classList.toggle("hidden");
};