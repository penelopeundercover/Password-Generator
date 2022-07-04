## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password

#PHASE 1
##STEP 1
```
I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
```
1.How long is the password? 
(Make this show up on the screen.)
Should user be able to type whatever they want? Yes.
     -Between 8 and 128 characters
     -Check if less than 8
     -Check if greater than 128

##STEP 2
```
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
```
Should the user be able to type whatever they want? 
No. The only acceptable answers are yes or no. Boolean.
Think of confirms because each of the following questions will be true or false.
1.Ask for lowercase (If True, generateRandomLetter)
2.Ask for uppercase
3.Ask for numbers
4.Ask for special characters

##STEP 3
```
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
```
Make sure user selects at least one of the 4 confirms above. 
Otherwise you don't know what characters to use to make their password.

#PHASE 2
```
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
```
1.Guarantee we have at least one character of each required type. (Meaning each type the user chose to be used in their password.)
    -If any of the confirms are true, then add a character to your string(password). Just one. That's how you will first guarantee you have one of each type they chose.
    -Once you have that you should be able to grab whatever characters are remaining to fill up the rest.
    (Once you have one of each criteria, you can freely/randomly select a character from any character type)
    -After we have one character of every type fulfilled, we can merge all valid characters into a single giant character pool.
    -Then we can randomly select from the giant character pool to fill the password until it is the proper length.
    -Once you get it filled to the proper length, you return the password and you're done.
    -You could also shuffle the password to guarantee that the first couple letters aren't always in the same order (not required).


    When they hit the Generate Password button, ask how long they want the password to be.
    Save the answer. --Input validation
    
    Then ask if they want an uppercase letter.
    If yes, randomly generate an uppercase letter and save it.
    If no, do nothing.

    Then ask if they want a lowercase letter.
    If yes, randomly generate a lowercase letter and save it/add to what is already saved.
    If no, do nothing.

    Then ask if they want a number.
    If yes, randomly generate a number and save it/add to what is already saved.
    If no, do nothing.

    Then ask if they want a special character.
    If yes, randomly generate a special character and save it/add to what is already saved.
    If no, do nothing.

    Add random characters of any type to fulfill the rest of the length requirement.

    Display the password.

    First I'll create the functions, then add event listeners.

1.Prompt the user for the password criteria.
2.Validate the answers.
3.Create the password.
4.Display the password.
