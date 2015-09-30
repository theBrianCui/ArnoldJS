ArnoldJS
==============

Inspired by [ArnoldC](https://github.com/lhartikk/ArnoldC), ArnoldJS adds syntactic sugar to JavaScript
that makes it less forgiving, more emotional, and even painful to write, allowing you to do less
with more code. 

Quotes by Arnold Schwarzenegger act as intuitive replacements for common JavaScript keywords, 
operators, and more. You can continue to use raw JavaScript inside ArnoldJS, and the `arnoldjs` 
transpiler will convert ArnoldJS code into raw JavaScript.

**Installation:**

`npm install -g arnoldjs`

**Usage:**

`arnoldjs [input-file] [output-file]`

The contents of `[output-file]` will be replaced by the transpiled contents of `[input-file]`.
Input files conventionally use the `.ajs` extension, and output files conventionally use the `.js` extension, though
any file extensions can be provided.

ArnoldJS can also be used as a module in your code to be called programatically:

`npm install --save arnoldjs`

Usage:

    var arnoldjs = require('arnoldjs');
    var ajsProgram = "TERMINATED";
    var jsProgram = arnoldjs.transpile(ajsProgram); //stores ";"

Example Program
----------------

Hello, World! with ArnoldJS:

    TALK TO THE HAND
        GIVE THESE PEOPLE AIR
            "Hello, World!"
        ENOUGH TALK
    TERMINATED

An implementation of [FizzBuzz](http://c2.com/cgi/wiki?FizzBuzzTest) using a mix of ArnoldJS syntax and raw JavaScript:

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

This program can be found in `samples/fizzbuzz.ajs`. Its transpiled version can be found in `samples/fizzbuzz.js`.
Additional examples can be found in the `samples` directory.

Usage
--------------
The following phrases (case sensitive) on the left of the : are replaced by the word or character on the right.

**Statements and Keywords**

`YOU SET US UP` : `var`

`CHILL OUT` : `const`

`NOT TO BE` : `null`

`YOUR CLOTHES GIVE THEM TO ME` : `new`

`I'M HERE` : `this`

`TO HELL WITH YOU` : `delete`

**Control Flow Statements**

`LISTEN TO ME VERY CAREFULLY` : `function`

`I'LL BE BACK` : `return`

`BECAUSE I'M GOING TO SAY PLEASE` : `if`

`YOU HAVE NO RESPECT FOR LOGIC` : `else`

`LET'S KICK SOME ICE` : `for`

`COOL PARTY` : `while`

`THE ICEMAN COMETH` : `do`

`GET OUT` : `continue`

`WHAT THE HELL ARE YOU` : `switch`

`KNOCK KNOCK` : `case`

`GET TO THE CHOPPER` : `break`

`I'LL KILL YOU NEXT TIME` : `default`

`TRUST ME` : `try`

`IT'S NOT A TUMOR` : `catch`

`PUT THE COOKIE DOWN` : `finally`

**Objects and object properties**

`BULLSHIT` : `false`

`HE'LL LIVE` : `true`

`TALK TO THE HAND` : `console.log`

`YOU ARE TERMINATED` : `process.exit`

`FOLLOW THE NUMBERS` : `.length`

`GET YOUR ASS TO MARS` : `.pop`

`HERE IS MY INVITATION` : `.push`

`LIQUID METAL` : `.bind`

`LET ME TRY MINE` : `.call`

`HERE'S A COUPLE OF ACRES` : `.apply`

**Operators**

`STICK AROUND` : `=`

`YOU ARE NOT YOU YOU ARE ME` : `===`

`I NEED YOUR CLOTHES YOUR BOOTS AND YOUR MOTORCYCLE` : `.`

`GET UP` : `+`

`GET DOWN` : `-`

`YOU'RE FIRED` : `*`

`HE HAD TO SPLIT` : `/`

`I LET HIM GO` : `%`

`I LIED` : `!`

`WHAT'S WRONG WITH YOUR EYES` : `?`

`I NOW KNOW WHY YOU CRY` : ` :`

**Commonly used characters**

`DO IT NOW` : `()`

`IT'S SHOWTIME` : `{`

`HASTA LA VISTA BABY` : `}`

`GIVE THESE PEOPLE AIR` : `(`

`ENOUGH TALK` : `)`

`TERMINATED` : `;`
