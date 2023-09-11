// Assignment code here

// Variable Declaration
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = lowercaseLetters.toUpperCase();
var numbers = "0123456789";
var specialCharacters = " \\!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; // String copied from OWASP.org but had to backslash out


console.log(lowercaseLetters);
console.log(uppercaseLetters);
console.log(numbers);
console.log(specialCharacters);

function generatePassword () {

  var passwordLength = parseInt(prompt("Please entered desired password length between 8 and 128 characters."));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please try again, enter a valid password length of no less than 8 and no more than 128 characters.");
    return;
  }
  var useLowercase = confirm("Include lowercase letters?"); //is it possible to replace cancel with "NO'?"
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
