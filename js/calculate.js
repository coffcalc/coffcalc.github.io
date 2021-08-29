import { absorption } from "./constans";

const brew = document.getElementById("brew");
const strength = document.getElementById("strength");
const coffee = document.getElementById("coffee");
const water = document.getElementById("water");

brew.addEventListener('input', e => calculate)
strength.addEventListener('input', e => calculate)


const calculate = () => {
    const cof = (brew / strength) - absorption.average;
    coffee.innerText = cof;
    water.innerText = brew + absorption.average * cof;
}
