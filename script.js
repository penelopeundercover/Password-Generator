// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 8;
var choiceArray = [];

function generatePassword() {
    console.log("Hey! You clicked the button!") //This just tells me if the button is connected correctly.
    //Store the generated password as a variable. And return that variable. Which should display it onto the screen.

    return "Generated password will go here." //This reminds me I need to return something at the end of the code.

}

function generateRandomLowercaseLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random()* alphabet.length)]
};

function generateRandomUppercaseLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet[Math.floor(Math.random()* alphabet.length)]
};

function generateRandomNumber(min0, max9){
    return Math.floor(Math.random()* (9-0 +1)) + 0;
};

function generateSpecialCharacter() {
    const specialCharacters = "!@#$%^&*()-_+={}[]\|<>/?"
    return specialCharacters[Math.floor(Math.random()*specialCharacters.length)]
};

function getPrompts(){
    passwordLength = parseInt(prompt("How long do you want your password to be? Choose a number between 8 and 128."));

    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be a number between 8 and 128. Try again.")
        return false;
    };

   if (confirm("Do you want lowercase letters in your password?")) {
    generateRandomLowercaseLetter
   };

   if (confirm("Do you want uppercase letters in your password?")) {
    generateRandomUppercaseLetter
   };

   if (confirm("Do you want numbers in your password?")) {
    generateRandomNumber
   };

   if (confirm("Do you want special characters in your password?")) {
   generateSpecialCharacter
};

return (true);
}


// Write password to the #password input
//Create a generatePassword function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  //#password is where the generated password displays on the screen

  passwordText.value = password; 
  //This is the line that takes the value of the generated password and plugs it in to display on the screen
  //This is step 4.
}

// Add event listener to generate button
//When a user clicks the button, it will call the writePassword function.
generateBtn.addEventListener("click", writePassword)