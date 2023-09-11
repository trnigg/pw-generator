// Generator Function
function generatePassword () {

  // Issues prompt for password length; alerts if length-criteria not met, then returns
  var passwordLength = parseInt(prompt("Please entered desired password length between 8 and 128 characters."));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please try again, enter a valid password length of no less than 8 and no more than 128 characters.");
    return;
  }

  // Declare possible characters
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = lowercaseChars.toUpperCase();
  var numbers = "0123456789";
  var specialChars = " \\!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; // String copied from OWASP.org but had to backslash out

  // Checks for which character-sets to include
  var useLowercase = confirm("Include lowercase letters?"); //is it possible to replace cancel with "NO'?"
  var useUppercase = confirm("Include uppercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecialChars = confirm("Include special characters?");

  // Defines character-set to use in function based of response to above; alerts if no sets are selected
  var charSet = ("");
  if (useLowercase) charSet += lowercaseChars;
  if (useUppercase) charSet += uppercaseChars;
  if (useNumbers) charSet += numbers;
  if (useSpecialChars) charSet += specialChars;
  if (charSet === "") {
    alert("Please try again, selecting at least one character type.");
    return;
  }

  // Declared the password and selects random chars from character set to the required length, as determined above
var password = "";
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * charSet.length);
  password += charSet.charAt(randomIndex);
  }

return password;
}

// Provided code below:

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
