const colors = [
    "#9FE5FF",
    "#F3BFFF",
    "#FFBFBF",
    "#BFFFF3",
    "#BFFFC4",
    "#FFFBBF",
    "#FFE8BF"
];

function getColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

export {getColor};