for (
    var n = 1; n <= 100; n = n + 1
) {
    var out = "";
    if (!(n % 3))
        out = out + "Fizz";
    if (!(n % 5))
        out = out + "Buzz";
    console.log(out ? out : n);
}