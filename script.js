var generateBtn = document.querySelector("#generate");
var passwordLength = 8;
var Uppercase = [];
var Lowercase = [];
var Numbers = [];
var SpecialCharacters = [];
var choiceArray = [Uppercase, Lowercase, Numbers, SpecialCharacters];

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
 
   var Uppercase = confirm("Do you want uppercase letters in your password?"); {
        generateRandomUppercaseLetter;
        choiceArray = choiceArray.push(Uppercase);
   }
    var Lowercase = confirm("Do you want lowercase letters in your password?"); {
        generateRandomLowercaseLetter;
        choiceArray = choiceArray.push(Lowercase);
    }
    var Numbers = confirm("Do you want numbers in your password?"); {
        generateRandomNumber;
        choiceArray = choiceArray.push(Numbers);
    }
    var SpecialCharacters = confirm("Do you want special characters in your password?"); {
        generateSpecialCharacter;
        choiceArray = choiceArray.push(SpecialCharacters);
    }

return (true);
    
};

// Write password to the #password input
//Create a generatePassword function
function writePassword() {
    var validPromptInput = getPrompts();

    if (validPromptInput) {  
        var password = generatePassword();
        var passwordText = document.querySelector("#password"); 
        //#password is where the generated password displays on the screen
      
        passwordText.value = password; 
        //This is the line that takes the value of the generated password and plugs it in to display on the screen
        //This is step 4.
        
    }

}

function generatePassword() {
    var password = "";
    for (var i = 0; i <passwordLength; i++) {
        var randomCharacter = Math.floor(Math.random() * choiceArray.length);
        password = password + choiceArray[randomCharacter];
    }


    
    console.log("Button is working") //This just tells me if the button is connected correctly.
    //Store the generated password as a variable. And return that variable. Which should display it onto the screen.

    return "Generated password will go here." //This reminds me I need to return something at the end of the code.
}

//When a user clicks the button, it will call the writePassword function.
generateBtn.addEventListener("click", writePassword)