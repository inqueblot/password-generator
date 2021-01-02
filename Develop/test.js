const passwordLength = Number(prompt("How many character's is your password?", "8-128"));
const checkLower = confirm("Does this password contain a lowercase letter?");
const checkUpper = confirm("Does this password contain a uppercase letter?");
const checkNumber = confirm("Does this password contain a number?");
const checkSpecial = confirm("Does this password contain a special character?");

//console.log(typeof passwordLength);

let random = '';

for (let index = 0; index < passwordLength; index++) {
    while (random.length < passwordLength) {


        if (checkLower == true) {
            random += lowerCaseChars()
        };

        if (checkUpper == true) {
            random += upperCaseChars()
        };

        if (checkNumber == true) {
            random += numberChars()
        };

        if (checkSpecial == true) {
            random += symbolChars()
        };


    }

    var lessRandom = random.slice(0, passwordLength)

    function shuffle() {
        var arr = lessRandom.split('');           // Convert String to array

        arr.sort(function () {
            return 0.5 - Math.random();
        });
        moreRandom = arr.join('');                // Convert Array to string
        return moreRandom;                        // Return shuffled string
    }
}

shuffle()


console.log(random)
console.log(lessRandom)
console.log(moreRandom)

function lowerCaseChars() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function upperCaseChars() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}
function symbolChars() {
    var symbols = "!@#$%^&*()[]{}/,.?"; //check symbols to OWASP
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function numberChars() {
    return (Math.floor(Math.random() * 10));
}

generatePassword() 