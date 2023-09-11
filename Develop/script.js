// Assignment code here

// Variable Declaration
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseLetters = lowercaseLetters.map(item => item.toUpperCase());
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");


console.log(lowercaseLetters);
console.log(uppercaseLetters);
console.log(numbers);
console.log(specialCharacters); // Will '\\' create issues? Create password with two backslashes?

function generatePassword () {

  var passwordLength = parseInt(prompt("Please entered desired password length between 8 and 128 characters."));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }
  var useLowercase = confirm("Include lowercase letters?");
  var useUppercase = confirm("Include uppercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecialChars = confirm("Include special characters?");

  var charSet = ("");
  if (useLowercase) charSet += lowercaseLetters;
  if (useUppercase) charSet += uppercaseLetters;
  if (useNumbers) charSet += numbers;
  if (useSpecialChars) charSet += specialCharacters;
  if (charSet === "") {
    alert("Please try again, selecting at least one character type.");
    return;
  }

console.log(charSet);

var password = "";
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * charSet.length);
  password += charSet.charAt(randomIndex);
}
console.log(password);
  }


// OLD CODE BELOW
// function generatePassword(length, useUppercase, useLowercase, useNumbers, useSpecialChars) {
  



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
