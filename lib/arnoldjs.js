const keywords = {
    "YOU SET US UP": "var",
    "LISTEN TO ME VERY CAREFULLY": "function",
    "I'LL BE BACK": "return",
    "BULLSHIT": "false"
};
const objects = {
    "TALK TO THE HAND": "console.log"
};
const operators = {
    "STICK AROUND": "=",
    "GET UP": "+",
    "GET DOWN": "-",
    "YOU'RE FIRED": "*",
    "HE HAD TO SPLIT": "/",
    "I LET HIM GO": "%"
};
const characters = {
    "IT'S SHOWTIME": "{",
    "HASTA LA VISTA, BABY": "}",
    "GIVE THESE PEOPLE AIR": "(",
    "ENOUGH TALK": ")"
};

var fs = require('fs');

function transpile(file, output) {
    if(fs.existsSync(file)) {
        const contents = fs.readFileSync(file);
        fs.appendFileSync(output, contents);
    } else {
        console.error("Could not read file: " + file);
    }
}

module.exports = transpile;