// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const passwordLength = (prompt("How many character's is your password?", "8-128"));

  //validate user has provided necessary input 
  if (passwordLength == null) {
    alert('please select a number between 8-128');
    return;
  }

  if (passwordLength > 128 | passwordLength < 8) {
    alert('please select a number between 8-128');
    return;
  }

  const checkLower = confirm("Does this password contain a lowercase letter?");
  const checkUpper = confirm("Does this password contain a uppercase letter?");
  const checkNumber = confirm("Does this password contain a number?");
  const checkSpecial = confirm("Does this password contain a special character?");


  //validate user has provided necessary input
  if ((checkLower || checkUpper || checkNumber || checkSpecial) === false) {
    alert('please choose at least one character requirement.');
    return;
  }

  let random = '';

  //for loop to create password
  for (let index = 0; index < passwordLength; index++) {
    while (random.length < passwordLength) {


      if (checkLower == true) {
        random += lowerCaseChars()
      }

      if (checkUpper == true) {
        random += upperCaseChars()
      }

      if (checkNumber == true) {
        random += numberChars()
      }

      if (checkSpecial == true) {
        random += symbolChars()
      }
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
  var password = moreRandom;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function lowerCaseChars() {
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function upperCaseChars() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}
function symbolChars() {
  var symbols = "\" !#$%&'()*+,-./:;<=>?@[]^_`{|}]~\\"; //check symbols to OWASP
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function numberChars() {
  return (Math.floor(Math.random() * 10));
}