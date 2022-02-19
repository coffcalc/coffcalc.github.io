const colors = [
    {
        background : "#BFFFC4", //green  #FFDDBF
        buttons : "#FFDDBF"
    },
    {
        background : "#CBF0FF", //blue       CBF0FF  BDEBFE
        buttons : "#FFECBB"     // #FFDFBB / #FFECBB!
    },
    {
        background : "#FFD8D8", //pink   #E2EECA
        buttons : "#E2EECA"
    },
    {
        background : "#FFFBB7", //yellow #D3FCF3 / #FFDFA9
        buttons : "#FFDFA9"
    },
    {
        background : "#FFDFA9", //orange  #DAF0DB
        buttons : "#DAF0DB"
    }
]

function getColors() {
    return colors[Math.floor(Math.random() * colors.length)];
}

export {getColors};