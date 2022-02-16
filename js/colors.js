const colors = [
    "#BFFFC4",
    "#BDEBFE",
    "#FFCCCC",
    "#FFFBB7",
    "#FFDFA9"
];

function getColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

export {getColor};