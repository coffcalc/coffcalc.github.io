const backgroundColors = {
    green : "#BFFFC4",
    blue : "#CBF0FF",
    pink : "#FFD8D8",
    yellow : "#FFFBB7",
    orange : "#FFDFA9"
}

const thirdColors = {
    orangeForGreen : "#FFDDBF",
    yellowForBlue : "#FFECBB",
    greenForPink : "#E2EECA",
    orangeForYellow : "#FFDFA9",
    greenForOrange : "#DAF0DB"
}

const palletes = [
    {
        background : backgroundColors.green,
        thirdColor : thirdColors.orangeForGreen
    },
    {
        background : backgroundColors.blue,
        thirdColor : thirdColors.yellowForBlue
    },
    {
        background : backgroundColors.pink,
        thirdColor : thirdColors.greenForPink
    },
    {
        background : backgroundColors.yellow,
        thirdColor : thirdColors.orangeForYellow
    },
    {
        background : backgroundColors.orange,
        thirdColor : thirdColors.greenForOrange
    }
]

function getColors() {
    return palletes[Math.floor(Math.random() * palletes.length)];
}

export {getColors};