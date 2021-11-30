import { absorption } from "./constans.js";
import { getColor } from "./colors.js";

const brew = document.getElementById("brew-input");
let brewVal = parseInt(brew.value);
const strength = document.getElementById("strength-input");
let strengthVal = parseInt(strength.value);
const coffee = document.getElementById("coffee");
const water = document.getElementById("water");
const brewBtn = document.getElementById("brew-btn");
const coffeeBtn = document.getElementById("coffee-btn");
const brewInputCon = document.getElementById("brew-input-con");
const coffeeInputCon = document.getElementById("coffee-input-con");
const coffeeResultCon = document.getElementById("coffee-result-con");
const brewResultCon = document.getElementById("brew-result-con");
const waterResultCon = document.getElementById("water-result-con");
const coffeeInput = document.getElementById("coffee-input");
const brewResult = document.getElementById("brew");
const useCon = document.getElementById("use-con");
const getCon = document.getElementById("get-con");
const root = document.querySelector(":root");


brew.addEventListener('change', calculateBrew);
strength.addEventListener('change', calculateBrew);


function calculateBrew() {
    brewVal = parseFloat(brew.value);
    strengthVal = parseFloat(strength.value);
    const cof = brewVal / (strengthVal - absorption.average);
    const wat = brewVal + absorption.average * cof;
    if (!isNaN(cof) && !isNaN(wat) && cof > 0 && wat > 0) {
        coffee.innerText = Math.round((cof + Number.EPSILON) * 10) / 10;
        water.innerText = Math.round((wat + Number.EPSILON) * 10) / 10;
    } else {
        coffee.innerText = 0;
        water.innerText = 0;
    }
};


brewBtn.addEventListener('click', switchFields);
coffeeBtn.addEventListener('click', switchFields);
coffeeInput.addEventListener('change', calculateCoffee);
strength.addEventListener('change', calculateCoffee);

function switchFields() {
    brewBtn.classList.toggle("clicked");
    coffeeBtn.classList.toggle("clicked");
    brewInputCon.classList.toggle("hidden");
    coffeeInputCon.classList.toggle("hidden");
    waterResultCon.classList.toggle("water-result-con-use-brew");
    waterResultCon.classList.toggle("water-result-con-use-coffee");
    coffeeResultCon.classList.toggle("hidden")
    coffeeResultCon.classList.toggle("coffee-result-con-use-brew")
    brewResultCon.classList.toggle("hidden");
    brewResultCon.classList.toggle("brew-result-con-use-coffee");
    useCon.classList.toggle("use-brew");
    useCon.classList.toggle("use-coffee");
    getCon.classList.toggle("hidden");
    brew.value = "";
    strength.value = "";
    coffeeInput.value = "";
    coffee.innerText = 0;
    water.innerText = 0;
    brewResult.innerText = 0;
};

function calculateCoffee() {
    const coffeeVal = parseFloat(coffeeInput.value);
    const strengthVal = parseFloat(strength.value);
    const wat = coffeeVal * strengthVal;
    const brw = wat - absorption.average * coffeeVal;
    if (!isNaN(wat) && !isNaN(brw) && brw > 0) {
        water.innerText = Math.round((wat + Number.EPSILON) * 10) / 10;
        brewResult.innerText = Math.round((brw + Number.EPSILON) * 10) / 10;
    }
}

window.onload = function() {
    const color = getColor();
    root.style.setProperty('--background-color', color);
    console.log(color);
}
