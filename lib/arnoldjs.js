const keywords = {
    "YOU SET US UP": "var",
    "CHILL OUT": "const",
    "NOT TO BE": "null",
    "YOUR CLOTHES, GIVE THEM TO ME": "new",
    "I'M HERE": "this",

    //Control flow statements
    "LISTEN TO ME VERY CAREFULLY": "function",
    "I'LL BE BACK": "return",
    "BECAUSE I'M GOING TO SAY PLEASE": "if",
    "YOU HAVE NO RESPECT FOR LOGIC": "else",

    "LET'S KICK SOME ICE": "for",
    "COOL PARTY": "while",
    "THE ICEMAN COMETH": "do",
    "GET OUT": "continue",

    "WHAT THE HELL ARE YOU": "switch",
    "KNOCK KNOCK": "case",
    "GET TO THE CHOPPER": "break",
    "I'LL KILL YOU NEXT TIME": "default",

    "TRUST ME": "try",
    "IT'S NOT A TUMOR": "catch",
    "PUT THE COOKIE DOWN": "finally",

    //Others
    "TO HELL WITH YOU": "delete",
    "BULLSHIT": "false",
    "HE'LL LIVE": "true"
};
const objects = {
    "TALK TO THE HAND": "console.log",
    "YOU ARE TERMINATED": "process.exit",

    //Array Methods
    "GET YOUR ASS TO MARS": ".pop",
    "HERE IS MY INVITATION": ".push",

    //Function Methods
    "LIQUID METAL": ".bind",
    "LET ME TRY MINE": ".call",
    "HERE'S A COUPLE OF ACRES": ".apply"
};
const operators = {
    "STICK AROUND": "=",
    "YOUR CLOTHES, GIVE THEM TO ME": ".",
    "GET UP": "+",
    "GET DOWN": "-",
    "YOU'RE FIRED": "*",
    "HE HAD TO SPLIT": "/",
    "I LET HIM GO": "%",
    "I LIED": "!",
    "WHAT'S WRONG WITH YOUR EYES": "?",
    "I NOW KNOW WHY YOU CRY": ":"
};
const characters = {
    "DO IT NOW": "()",
    "IT'S SHOWTIME": "{",
    "HASTA LA VISTA, BABY": "}",
    "GIVE THESE PEOPLE AIR": "(",
    "ENOUGH TALK": ")",
    "TERMINATED": ";"
};

var fs = require('fs');
var nb = require('node-beautify');

//Replace multiple strings in one pass
//https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
function replaceAll(str, mapObj) {
    var re = new RegExp(Object.keys(mapObj).join("|"), "gi");

    return str.replace(re, function (matched) {
        return mapObj[matched];
    });
}

function transformFile(file, output) {
    if (fs.existsSync(file)) {
        if (fs.existsSync(output)) fs.truncateSync(output);

        var input = transpile(fs.readFileSync(file, 'utf8'));

        fs.appendFileSync(output, nb.beautifyJs(input));
    } else {
        console.error("Could not read file: " + file);
    }
}

function transpile(input) {
    input = replaceAll(input, keywords);
    input = replaceAll(input, objects);
    input = replaceAll(input, operators);
    input = replaceAll(input, characters);
    return input;
}

module.exports = transformFile;