function generatePassword(){
  //TODO: your code goes here
  let userInput = prompt('please! input minimum password length of at least 8 characters and no more than 128 characters');
  let userCon = confirm(`Is this your final length: ${userInput}.`)
  let convert = + userInput;
   
 if (userCon){
    alert('Here is your password, if not satisfy, please click generate password again');
   } else {
     return;
   }
  
  let randomLetter = ['z','l','k','e','a','r','g','@','#','@','$','t','a','k','n','v','o','a','h','r','r','j','f','d','g','j','h','%'];
  
  let randomNumber = [2,3,8,4,1,7,5,8,9,6];
  
  let randomSpecial =['!','@','#','$','%','&'];

  let randomP = randomLetter.concat(randomNumber, randomSpecial);

  let genAnswer = [];
  
  if ( userCon === true) {
       genAnswer.push(randomP.join('').toUpperCase());
     
  }
  if(userCon === true) { 
      genAnswer.push(randomP.join('').toLowerCase());
   } else {
    return;
  }
  let news = genAnswer.join('');
  let makePass = ' ';

  for ( let i = 0; i < convert; i++){
     
  makePass += news.charAt(Math.floor(Math.random() * news.length));

}
  return makePass;
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


