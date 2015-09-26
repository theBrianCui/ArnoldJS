const keywords = {
    "YOU SET US UP": "var",
    "LISTEN TO ME VERY CAREFULLY": "function",
    "I'LL BE BACK": "return",
    "BULLSHIT": "false",
    "HE'LL LIVE": "true"
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
    "I LET HIM GO": "%",
    "I LIED": "!"
};
const characters = {
    "IT'S SHOWTIME": "{",
    "HASTA LA VISTA, BABY": "}",
    "GIVE THESE PEOPLE AIR": "(",
    "ENOUGH TALK": ")"
};

var fs = require('fs');

//Replace multiple strings in one pass
//https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
function replaceAll(str, mapObj) {
    var re = new RegExp(Object.keys(mapObj).join("|"), "gi");

    return str.replace(re, function (matched) {
        return mapObj[matched.toLowerCase()];
    });
}

function transpile(file, output) {
    if (fs.existsSync(file)) {
        var contents = fs.readFileSync(file);
        if (fs.existsSync(output)) fs.truncateSync(output);

        contents = replaceAll(contents, keywords);
        contents = replaceAll(contents, objects);
        contents = replaceAll(contents, operators);
        contents = replaceAll(contents, characters);

        fs.appendFileSync(output, contents);
    } else {
        console.error("Could not read file: " + file);
    }
}

module.exports = transpile;