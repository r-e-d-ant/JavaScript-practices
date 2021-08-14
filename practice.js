console.log("Hello, World")

// Legend
// = Chapter
// > Title
// >> Subtitle
/* +
Challenge
*/
/*
- Description
*/

// = Basics

// > Function to check input user credentials if there meet conditions and store in dictionary.

function verifySignupForm(username, age, password){
    var lessSecurePasswordTypes = [123456, 'thank you', 654321, 'qwerty', 'azerty', 123456789]
    // Check if username length is less than 3.
    if (username.length < 3){
        console.log("Username characters must not be under 2 characters");
    }
    // Check if type of age is string
    if (typeof(age) === "string"){
        console.log("Age must be in numbers");
    }
    // Check password length
    if (password.length < 6){
        console.log("Password can't be under six characters");
        var passwordLength = false;
    }
    // Check if the password is in less secure password type
    for (var i = 0; i < lessSecurePasswordTypes.length; i++){
        if (password == lessSecurePasswordTypes[i]){
            console.log("Password is not secure, try another one");
            var securityAnswer = false;
            break
    }
    }
    // Check if all input match condition
    if (username.length > 3 && typeof(age) !== "string" && securityAnswer !== false && passwordLength !== false){
        console.log("Signup successfully")
    }
}

verifySignupForm("MTL", 19, "123456789New")

// > Give feed back based on users answer

function verifyEventDate(date){
    switch (date){
        case "02/02/2002":
            console.log("Your rende-vous is settled to " + date + "\nPlease be on time, like 15 minutes before.");
            break;
        case "03/02/2002":
            console.log("Your rende-vous is settled to "+ date + "\nPlease be on time, like 15 minutes before.");
            break;
        case "I will not come":
            console.log("Ooh You will not come :( Ok no matter, \nHope to see you later.");
            break;
    }
}

verifyEventDate("I will not come")

// > While loops and for loops

var arr = [];
var i = 0;
do {
    arr.push(i);
    i++;
}while(i < 5);

var myArray = [[1,2], [2,3], [4, 5]];
var product_ = 1;

for (var i = 0; i < myArray.length; i++){
    for (var j = 0; j < myArray[i].length; j++)
    console.log(myArray[i][j]);
    product_ = product_ * myArray[i][j];
}

console.log(product_)

function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++){
        product = product * arr[i];
    }
    return product;
}

function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
}

resp = multiply([1, 2, 3, 4], 4)
console.log(resp)

// > Objects

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    // Only change code below this line
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name){
            if (contacts[i].hasOwnProperty(prop)){
                console.log(contacts[i][prop])
            } else {
                console.log("No such property")
            }
        }
    }
    console.log("No such contact")
    // Only change code above this line
}


lookUpProfile("Harry", "number");

// > Generate Random fraction with Js
function randomDecimal(){
    console.log(Math.floor(1.6))
}

randomDecimal()

// > Generate a random a number from a given range.

function randomRange(myMin, myMax) {
    // Only change code below this line
    console.log((myMax - myMin + 1));
    console.log(Math.random() * (myMax - myMin + 1));
    console.log(Math.floor(Math.random() * (myMax - myMin + 1)));
    console.log(Math.floor(Math.random() * (myMax - myMin + 1)) + myMin);
    // Only change code above this line
  }

randomRange(1, 100);
console.log(Math.floor(Math.random() * (5 - 0 + 1)) + 0);

/* +
Create a function called randomRange that takes a range myMin and myMax
and returns a random whole number that's greater than or equal to myMin,
and is less than or equal to myMax, inclusive.
*/

function randomRange(myMin, myMax) {
    // Only change code below this line
    var randomNumber = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    if (randomNumber >= myMin && randomNumber <= myMax){
        console.log(randomNumber);
    }
    // Only change code above this line
}

randomRange(2, 10)

// > Return an integer from string

console.log(parseInt("2002"))
console.log(parseInt("22", 16))

// > Use the conditionary (Ternary) operator
function checkSign(num) {
    return (num === 0) ? "zero"
      : (num > 0) ? "positive"
      : "negative";
    }

// > Use Multiple Conditional (Ternary) Operators
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
}
  
checkSign(10);

// > // Use Recursion to Create a Range of Numbers