// Assignment Code
var generateBtn = document.querySelector("#generate");

function upperCaseChars() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}
function symbolChars() {
  var symbols = "!@#$%^&*()[]{}/,.?";
  return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(symbolChars())



// Write password to the #password input
function writePassword() {
  var passwordLength = prompt('please enter a number between 8-128', '8-128');
  //var lowerCase = confirm('Does the password need to contain a lowercase letter?');
  var upperCase = confirm('Does the password need to contain upper case letters?')

  var lowerCaseChars = String.fromCharCode(97 + Math.floor(Math.random() * 26));
  var numberChars = String.fromCharCode(48 + Math.floor(Math.random() * 10));


  console.log(symbolChars)
  //not my code
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;





  function generatePassword() {
    var length = passwordLength;
    retVal = "";
    // let charset = lowerCaseChars;
    // if (upperCase == true) charset.concat(upperCaseChars);

    for (var i = 0, n = charset.length; i < length; i++) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt to ask length of password


// 

// const upperCase = confirm('Does the password need to contain a uppercase letter?')

// const numCharacter = confirm('Does the password need to contain a number?')

// const specCharacter = confirm('does the password need to contain a special character?')

// const Characters = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]

console.log(String.fromCharCode(65 + Math.floor(Math.random() * 26)))

console.log(String.fromCharCode(97 + Math.floor(Math.random() * 26)))
