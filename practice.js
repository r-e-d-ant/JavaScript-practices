console.log("Hello, World")

// Legend
// = Chapter
// > Title
// >> Subtitle
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