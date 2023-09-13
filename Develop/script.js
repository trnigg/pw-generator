// Generator Function
function generatePassword () {

  // Issues prompt for password length; alerts if length-criteria not met, then returns
  let passwordLength = parseInt(prompt("Please enter desired password length between 8 and 128 characters."));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please try again with a valid password length of no less than 8 and no more than 128 characters.");
    return;
  }

  // Declare possible characters
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChars = lowercaseChars.toUpperCase();
  let numbers = "0123456789";
  let specialChars = " \\!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; // String copied from OWASP.org but had to backslash out

  // Check / Declare which character-sets to include
  let useLowercase = confirm("Include lowercase letters?"); //is it possible to replace cancel with "NO'?"
  let useUppercase = confirm("Include uppercase letters?");
  let useNumbers = confirm("Include numbers?");
  let useSpecialChars = confirm("Include special characters?");

  // Defines character-set to use in function based of response to above; alerts if no sets are selected
  let charSet = "";
  if (useLowercase) charSet += lowercaseChars;
  if (useUppercase) charSet += uppercaseChars;
  if (useNumbers) charSet += numbers;
  if (useSpecialChars) charSet += specialChars;
  if (charSet === "") {
    alert("Please try again, selecting at least one character type.");
    return;
  }

  // Declared the password and selects random chars from character set to the required length, as determined above
  password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(randomIndex);
  }
  return password;
}

// Starter-code below:

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  // Displays message if any requirements haven't been fulfilled, otherwise displays pw (this is appended to starter-code)
  if (!password) {
    passwordText.value = "Please try again.";
  } else {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
