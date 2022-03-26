import { absorption } from "./constans.js";
import { getColors } from "./colors.js";
// import { elementScrollIntoView } from "seamless-scroll-polyfill";
// import { polyfill } from "seamless-scroll-polyfill";
// import { smoothscroll } from 'smoothscroll-polyfill';
// import { smoothscrollPolyfill } from 'smoothscroll-polyfill';

const brewBtn = document.getElementById("brew-btn");
const coffeeBtn = document.getElementById("coffee-btn");

const brewInput = document.getElementById("brew-input");
const strengthInput = document.getElementById("strength-input");
const coffeeInput = document.getElementById("coffee-input");

const coffeeResult = document.getElementById("coffee-result");
const waterResult = document.getElementById("water-result");
const brewResult = document.getElementById("brew-result");

const brewInputCon = document.getElementById("brew-input-con");
const coffeeInputCon = document.getElementById("coffee-input-con");

const coffeeResultCon = document.getElementById("coffee-result-con");
const brewResultCon = document.getElementById("brew-result-con");
const waterResultCon = document.getElementById("water-result-con");


const calculateBtn = document.getElementById("calculate-btn");
const scrollDown = document.getElementsByTagName("footer")[0];

const shouldUse = document.getElementById("should-use");
const willGet = document.getElementById("will-get");
const root = document.querySelector(":root");


brewInput.addEventListener('change', calculateBrew);
strengthInput.addEventListener('change', calculateBrew);
coffeeInput.addEventListener('change', calculateCoffee);
strengthInput.addEventListener('change', calculateCoffee);

calculateBtn.addEventListener('click', calculate);
// smoothscroll.polyfill();
calculateBtn.addEventListener('click', scrollDown.scrollIntoView({behavior : "smooth"}));
// calculateBtn.addEventListener('click', window.scroll({bottom: 0, behavior : "smooth"}));

// polyfill();

// // calculateBtn.addEventListener('click', window.scrollTo(scrollDown, {behavior: "smooth"}));
// calculateBtn.addEventListener('click', window.scrollTo({bottom: 0, behavior: "smooth"}));


function calculate() {
    if (brewBtn.classList.contains("clicked")) {
        calculateBrew();
    } else {
        calculateCoffee();
    }
}

function calculateBrew() {
    // brewValue = parseFloat(brew.value);
    const brewValue = parseFloat(brewInput.value);
    const strengthValue = parseFloat(strengthInput.value);
    const coffee = brewValue / (strengthValue - absorption.average);
    const water = brewValue + absorption.average * coffee;
    if (!isNaN(coffee) && !isNaN(water) && coffee > 0 && water > 0) {
        coffeeResult.innerText = Math.round((coffee + Number.EPSILON) * 10) / 10;
        waterResult.innerText = Math.round((water + Number.EPSILON) * 10) / 10;
    } else {
        coffeeResult.innerText = 0;
        waterResult.innerText = 0;
    }
};


function calculateCoffee() {
    const coffeeValue = parseFloat(coffeeInput.value);
    const strengthValue = parseFloat(strengthInput.value);
    const water = coffeeValue * strengthValue;
    const brew = water - absorption.average * coffeeValue;
    if (!isNaN(water) && !isNaN(brew) && brew > 0) {
        waterResult.innerText = Math.round((water + Number.EPSILON) * 10) / 10;
        brewResult.innerText = Math.round((brew + Number.EPSILON) * 10) / 10;
    }
};

brewBtn.addEventListener('click', switchToBrew);
coffeeBtn.addEventListener('click', switchToCoffee);


function switchToBrew() {
    brewBtn.classList.add("clicked");
    coffeeBtn.classList.remove("clicked");

    coffeeInputCon.classList.add("hidden");
    brewInputCon.classList.remove("hidden");

    waterResultCon.classList.add("water-result-con-use-brew");
    waterResultCon.classList.remove("water-result-con-use-coffee");

    brewResultCon.classList.add("hidden");
    coffeeResultCon.classList.remove("hidden");
    brewResultCon.classList.remove("brew-result-con-use-coffee");
    coffeeResultCon.classList.add("coffee-result-con-use-brew")
    shouldUse.classList.add("use-brew");
    shouldUse.classList.remove("use-coffee");
    willGet.classList.add("hidden");

    brewInput.value = "";
    strengthInput.value = "";
    coffeeInput.value = "";

    coffeeResult.innerText = 0;
    waterResult.innerText = 0;
    brewResult.innerText = 0;
}

function switchToCoffee() {
    coffeeBtn.classList.add("clicked");
    brewBtn.classList.remove("clicked");

    brewInputCon.classList.add("hidden");
    coffeeInputCon.classList.remove("hidden");

    waterResultCon.classList.add("water-result-con-use-coffee");
    waterResultCon.classList.remove("water-result-con-use-brew");

    coffeeResultCon.classList.add("hidden");
    brewResultCon.classList.remove("hidden");
    brewResultCon.classList.add("brew-result-con-use-coffee");
    coffeeResultCon.classList.remove("coffee-result-con-use-brew")
    shouldUse.classList.remove("use-brew");
    shouldUse.classList.add("use-coffee");
    willGet.classList.remove("hidden");

    brewInput.value = "";
    strengthInput.value = "";
    coffeeInput.value = "";

    coffeeResult.innerText = 0;
    waterResult.innerText = 0;
    brewResult.innerText = 0;
}

window.onload = function() {
    const colors = getColors();
    root.style.setProperty('--background-color', colors.background);
    root.style.setProperty('--third-color', colors.thirdColor);
};
