function generatePassword(){
  //TODO: your code goes here
  
  alert('please! choose password length of at least 8 characters and no more than 128 characters');
  alert('please! confirm whether or not to include lowercase, uppercase, numeric, and/or special characters');
  alert('Here is your password, if not satisfy, please click generate password again');
  let randomLetter = ['zlkearg@$#@$taknvoah845r92rjfdkgjh%24'];
  let randomNumber = ['23874175897'];
  let randomSpecial =['hgjkhgjhgiu&%@'];
  let randomP = randomLetter.concat(randomNumber, randomSpecial);
  let randomJ = randomP.join('');
  let randomText = ' ' ;
  let randomText2 = ' ';
 
  randomText += randomJ.substring(Math.floor(Math.random() * randomJ.length),Math.floor(Math.random() * randomJ.length) + 4);
  randomText2 += randomJ.substring(Math.floor(Math.random() * randomJ.length),Math.floor(Math.random() * randomJ.length) + 4);
  let randomT = randomText.concat(randomText2.toUpperCase().trim());
  return randomT;
}



// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

