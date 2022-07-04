var generateBtn = document.querySelector("#generate");
var passwordLength = 8;
//I created functions for the computer to generate these arrays instead, but after hours 
//and hours of trying, could not figure out how to incorporate them. 
//Finally I asked a learning assistant, who told me that might be a bit complex at this 
//stage in the learning process. So I went with this tedious thing instead. 
//Hoping to figure out my first idea before too long!
var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
"P", "Q","R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var SpecialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+",
"=", "{", "[", "}", "]", "|", "/", "~", "`"]
var choiceArray = []; //Made this empty because I want to put stuff in it.

function getPrompts(){
    passwordLength = parseInt(prompt("How long do you want your password to be? Choose a number between 8 and 128."));
//By using parseInt I turned the number into a string. 
    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be a number between 8 and 128. Try again.")
        return false;
    };
 
    //If the user says yes, the computer will add lowercase letters to the choice array.
   if (confirm("Do you want uppercase letters in your password?")); {
        choiceArray = choiceArray.concat(Lowercase);
   }
    if (confirm("Do you want uppercase letters in your password?")); {
        choiceArray = choiceArray.concat(Uppercase);
    }
    if(confirm("Do you want numbers in your password?")); {
        choiceArray = choiceArray.concat(Number);
    }
    if(confirm("Do you want special characters in your password?")); {
        choiceArray = choiceArray.concat(SpecialCharacters);
    }

return (true);
    
};

// Write password to the #password input
//Create a generatePassword function
function writePassword() {
    var validPromptInput = getPrompts(); 
//Putting this if statement in here just in case the user's input wasn't valid.
//I'm not sure what would happen if it wasn't, but I don't want to deal with it.
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
//The above took the choice array and added the rest to fill in the password.

return password;
}

//When a user clicks the button, it will call the writePassword function.
generateBtn.addEventListener("click", writePassword)