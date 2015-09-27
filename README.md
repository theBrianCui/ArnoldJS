ArnoldJS
-------------

Inspired by [ArnoldC](https://github.com/lhartikk/ArnoldC), ArnoldJS is an Arnold Schwarzenegger based programming
language that transpiles into JavaScript. Quotes by the famous Arnold Schwarzenegger act as replacements for common
JavaScript keywords, operators, and more. You can always use raw JavaScript inside ArnoldJS!

Installation:

`npm install -g arnoldjs`

Usage:

`arnoldjs [input-file] [output-file]`

The contents of `[output-file]` will be replaced by the transpiled contents of `[input-file]`.

Example Program
----------------

    LET'S KICK SOME ICE
    GIVE THESE PEOPLE AIR
        YOU SET US UP n STICK AROUND 1;
        n <= 100;
        n STICK AROUND n GET UP 1
    ENOUGH TALK
    IT'S SHOWTIME
    YOU SET US UP out STICK AROUND "";
    BECAUSE I'M GOING TO SAY PLEASE
        (I LIED (n I LET HIM GO 3))
        out STICK AROUND out GET UP "Fizz";
    BECAUSE I'M GOING TO SAY PLEASE
        (I LIED (n I LET HIM GO 5))
        out STICK AROUND out GET UP "Buzz";
    TALK TO THE HAND (out
        WHAT'S WRONG WITH YOUR EYES out
        I NOW KNOW WHY YOU CRY n);
    HASTA LA VISTA BABY

Additional examples can be found in the `samples` directory. ArnoldJS files use the `.ajs` extension, their transpiled
versions use the `.js` file.

Usage
--------------

**Statements and Keywords**

    "YOU SET US UP": "var",
    "CHILL OUT": "const",
    "NOT TO BE": "null",
    "YOUR CLOTHES GIVE THEM TO ME": "new",
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
    
**Objects and object properties**

    "TALK TO THE HAND": "console.log",
    "YOU ARE TERMINATED": "process.exit",
    
    "FOLLOW THE NUMBERS": ".length",
    
    //Array Properties/Methods
    "GET YOUR ASS TO MARS": ".pop",
    "HERE IS MY INVITATION": ".push",
    
    //Function Properties/Methods
    "LIQUID METAL": ".bind",
    "LET ME TRY MINE": ".call",
    "HERE'S A COUPLE OF ACRES": ".apply"
    
**Operators**

    "STICK AROUND": "=",
    "YOU ARE NOT YOU YOU ARE ME": "===",
    "I NEED YOUR CLOTHES YOUR BOOTS AND YOUR MOTORCYCLE": ".",
    "GET UP": "+",
    "GET DOWN": "-",
    "YOU'RE FIRED": "*",
    "HE HAD TO SPLIT": "/",
    "I LET HIM GO": "%",
    "I LIED": "!",
    "WHAT'S WRONG WITH YOUR EYES": "?",
    "I NOW KNOW WHY YOU CRY": ":"

**Commonly used characters**

    "DO IT NOW": "()",
    "IT'S SHOWTIME": "{",
    "HASTA LA VISTA BABY": "}",
    "GIVE THESE PEOPLE AIR": "(",
    "ENOUGH TALK": ")",
    "TERMINATED": ";"
