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
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0){
        return [startNum];
    } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        console.log(numbers);
    }
  }

rangeOfNumbers(1, 5)

// ===-----------=== //

// = ECMASCRIPT (ES6)

// > Explore Differences Between the var let and Const Keywords

/*
-
Here there is no Error, because variable
from var keyword can be overwritten without no problem.
*/
var y = 3;
var y = 9;
console.log(y)

/*
-
Here there be an error, because
variable from let keyword can't be overwritten.
*/

let x = 3;
let x = 10;
console.log(x)

// > Declare a Read-Only Variable with the const Keyword

var F_NAME = "Mugisha";
F_NAME = F_NAME + " Thierry";  // No Error
console.log(F_NAME)

let F_NAME = "Mugisha";
F_NAME = F_NAME + " Thierry";  // No Error
console.log(F_NAME)

const F_NAME = "Mugisha";
F_NAME = F_NAME + " Thierry";  // Error
console.log(F_NAME)

// > Prevent Object Mutation

const attendenceList = {
    att_1 : "Muto",
    att_2 : "Tito",
    att_3 : "Aratema",
    att_4 : "Aratonora",
    att_5 : "Igitoki",
}

Object.freeze(attendenceList)
attendenceList.att_1 = "nigga"; // Nothing gonna happen.
console.log(attendenceList)

// > Use Arrow Functions to Write Concise Anonymous Functions

const myFunc = function(){
    const myVal = "Hello, World";
    return myVal;
}

console.log(myFunc());

/*
-
ES6 provides us with the syntactic sugar to not have
to write anonymous functions this way.
Instead, you can use arrow function syntax:
*/

const myFunc = () => {
    myVal = "Hello, World.";
    return myVal;
}

console.log(myFunc());

/*
-
When there is no function body, and only a return value,
arrow function syntax allows you to omit the keyword return 
as well as the brackets surrounding the code. 
*/

const myFunc = () => "Hello, world.";
console.log(myFunc())

// > Write Arrow Functions with Parameters

const doubler = (item) => item * 2;
console.log(doubler(2002))

/*
-
If an arrow function has a single parameter,
the parentheses enclosing the parameter may be omitted.
*/

const doubler = item => item * 2;
console.log(doubler(2002))

/*
-
It is possible to pass more than one argument into an arrow function.
*/

const multiplier = (item, multiply) => item * multiply;
console.log(multiplier(2, 6))

// > Use the Spread Operator to Evaluate Arrays In-Place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line
console.log(arr2);

// > Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line
const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(today, tomorrow)
// Only change code above this line

// > Use Destructuring Assignment to Assign Variables from Objects

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
  
// Only change code above this line

console.log(highToday, highTomorrow)

// > Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
// Only change code above this line

// > Use Destructuring Assignment to Assign Variables from Arrays

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

/*
-
The console will display the values of a and b as 1, 2.
We can also access the value at any index in an array
with destructuring by using commas to reach the desired
index:
*/

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

/*
-
The console will display the values of a, b, and c as 1, 2, 5.
*/

// > Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...rest] = list; // Change this line
  // Only change code above this line
  console.log(a, b, rest);
}
const arr = removeFirstTwo(source);

// > Use Destructuring Assignment to Pass an Object as a Function's Parameters

/*
-
In some cases, you can destructure the object in a function argument itself.
Consider the code below:
*/

const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    console.log(name, age, nationality, location);
};

profile = {
    name: 'tito',
    age: 19,
    nationality: 'Burundian',
    location: 'Kimihurura, Gasabo, Kigali, Rwanda'
};

profileUpdate(profile);

/*
-
This effectively destructures the object sent into the function.
This can also be done in-place:
*/

const profileUpdate = ({ name, age, nationality, location }) => {

}

// > Create Strings using Template Literals

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for(var i=0; i < arr.length; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  // Only change code above this line
  console.log(failureItems)
  // return failureItems;
}

const failuresList = makeList(result.failure);

// > Write Concise Object Literal Declarations Using Object Property Shorthand

const createPerson = (name, age, gender) => ({
    // Only change code below this line
    name,
    age,
    gender
});

// Only change code above this line
console.log(createPerson('tito', 19, 'male'))

// > Write Concise Declarative Functions with ES6
// >> In ES5 Code:

const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
};

// >> In ES6 Code :
const person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
};

/*
-
Use class Syntax to Define a Constructor Function
In ES5:
*/

var Vegetable = function(name) {
    this.name = name;
}

var carrot = new Vegetable('Carrot')
console.log(carrot.name)

// In ES6:

class Vegetable {
    constructor(name){
        this.name = name;
    }
}
const carrot = new Vegetable("Carrot");
console.log(carrot.name)

class Student {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

// > Console a table

var tito = new Student("Tito", "Muto", 19)
var jane = new Student("Jane", "Pie", 76)
var doe = new Student("John", "Doe", 22)

console.table([tito, jane, doe])

// > Use getters and setters to Control Access to an Object

/*
-
You can obtain values from an object and
set the value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the value
of an object's private variable to the user without
the user directly accessing the private variable.

Setter functions are meant to modify (set) the value
of an object's private variable based on the value passed into
the setter function. This change could involve calculations,
or even overwriting the previous value completely.
*/

class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

/*
-
The console would display the strings anonymous and newAuthor.

Notice the syntax used to invoke the getter and setter.
They do not even look like functions. Getters and setters are important
because they hide internal implementation details.

Note: It is convention to precede the name of a private
variable with an underscore (_).
However, the practice itself does not make a variable private.
*/

// Create a Module Script

/*
-
JavaScript started with a small role to play on an otherwise mostly HTML web.
Today, it’s huge, and some websites are built almost entirely with JavaScript.
In order to make JavaScript more modular, clean, and maintainable;
ES6 introduced a way to easily share code among JavaScript files.
This involves exporting parts of a file for use in one or more other files,
and importing the parts you need, where you need them.
In order to take advantage of this functionality,
you need to create a script in your HTML document with
a type of module. Here’s an example:
*/

// <script type="module" src="filename.js"></script>

/*
-
A script that uses this module type can now use the
import and export features you will learn about in the upcoming challenges.
*/

// > Use export to Share a Code Block

/*
-
Imagine a file called math_functions.js
that contains several functions related to mathematical
operations. One of them is stored in a variable, add,
that takes in two numbers and returns their sum.
You want to use this function in several different JavaScript files.
In order to share it with
these other files, you first need to export it.
*/

export const add = (x, y) => {
    return x + y;
}

// The above is a common way to export a single function, but you can achieve the same thing like this:
const add = (x, y) => {
  return x + y;
}

export { add };

/* 
-
When you export a variable or function, you can import it
in another file and use it without having
to rewrite the code. You can export multiple things
by repeating the first example for each thing you want
to export, or by placing them all in the export statement
of the second example, like this:
*/

export { add, subtract };

// > Reuse JavaScript Code Using import

/*
-
import allows you to choose which parts of a file or moduleto load.
In the previous lesson, the examples exported add from the math_functions.js file.
Here's how you can import it to use in another file:
*/

import { add } from './math_functions.js';

/*
- 
Here, import will find add in math_functions.js,
import just that function for you to use,
and ignore the rest. The ./ tells the import to
look for the math_functions.js file in the same
folder as the current file. The relative file path (./)
and file extension (.js) are required when using import
in this way.
*/

// > You can import more than one item from the file by adding them in the import statement like this:

import { add, subtract } from './math_functions.js';

// > Use * to Import Everything from a File

/*
-
Suppose you have a file and you wish to import all of its contents into the current file.
This can be done with the import * as syntax.
Here's an example where the contents of a file named math_functions.js are
imported into a file in the same directory:
*/

import * as myMathModule from "./math_functions.js";

/*
-
The above import statement will create an object
called myMathModule. This is just a variable name,
you can name it anything.
The object will contain all of the exports
from math_functions.js in it,
so you can access the functions like you
would any other object property.
Here's how you can use the add and subtract functions that were imported:
*/

myMathModule.add(2,3);
myMathModule.subtract(5,3);

// > Create an Export Fallback with export default

/*
-
There is another export syntax you need to know, known as export default.
Usually you will use this syntax if only one value is being exported from a file.
It is also used to create a fallback value for a file or module.
Below are examples using export default:
*/

export default function add(x, y) {
    return x + y;
  }
  
  export default function(x, y) {
    return x + y;
}

/*
-
The first is a named function, and the second is an anonymous function.
*/

/*
-
Since export default is used to declare a fallback value for a module or file,
you can only have one value be a default export in each module or file. Additionally,
you cannot use export default with var, let, or const
*/

// > Import a Default Export

/*
-
In the last challenge, you learned about export default and its uses.
To import a default export, you need to use a different import syntax.
In the following example, add is the default export of
the math_functions.js file. Here is how to import it:
*/

import add from "./math_functions.js";

/*
-
The syntax differs in one key place.
The imported value, add, is not surrounded by curly braces ({}).
add here is simply a variable name for whatever the default export of
the math_functions.js file is. You can use any name here when importing a default.
*/

// > Create a JavaScript Promise

/*
-
A promise in JavaScript is exactly what it sounds like
- you use it to make a promise to do something, usually asynchronously.
When the task completes, you either fulfill your promise or fail to do so.
Promise is a constructor function, so you need to use the new keyword to create one.
It takes a function, as its argument, with two parameters - resolve and reject.
These are methods used to determine the outcome of the promise. The syntax looks like this:
*/

const myPromise = new Promise((resolve, reject) => {

});

// > Complete a Promise with resolve and reject

/*
-
A promise has three states: pending, fulfilled, and rejected.
The promise you created in the last challenge is forever stuck
in the pending state because you did not add a way to complete the promise.
The resolve and reject parameters given to the promise argument are used to do this.
resolve is used when you want your promise to succeed,
and reject is used when you want it to fail.
These are methods that take an argument, as seen below.

const myPromise = new Promise((resolve, reject) => {
    if(condition here) {
      resolve("Promise was fulfilled");
    } else {
      reject("Promise was rejected");
    }
});

The example above uses strings for the argument of these functions,
but it can really be anything. Often, it might be an object,
that you would use data from, to put on your website or elsewhere.

*/

// > Handle a Fulfilled Promise with then

/*
-
Promises are most useful when you have a process that
takes an unknown amount of time in your code (i.e. something asynchronous),
often a server request. When you make a server request it takes some amount of time,
and after it completes you usually want to do something with the response from the server.
This can be achieved by using the then method. The then method is executed
immediately after your promise is fulfilled with resolve. Here’s an example:
*/

myPromise.then(result => {
  
});

/*
-
result comes from the argument given to the resolve method.
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result)
});
*/

// > Handle a Rejected Promise with catch

/*
-
catch is the method used when your promise has been rejected.
It is executed immediately after a promise's reject method is called.
Here’s the syntax:
*/

myPromise.catch(error => {
  
});

// error is the argument passed in to the reject method.

/*
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  
  makeServerRequest.catch(error => {
    console.log(error)
})
*/

// - REGEX

// > Test

/*
-
Using test method
Match literal string.
*/

let myString = "Hello, John, Peter, Mary, Nadia: Yes";
let getMach = /Yes/;
let storeMatch = getMach.test(myString);
console.log(storeMatch); // true.

/*
-
Using test method
Match literal string with different possibilities.
*/

let myString = "Hello, John, Peter, Mary, Nadia: Yeah";
let getMach = /Yes|Yeah/;
let storeMatch = getMach.test(myString);
console.log(storeMatch); // true.

// > Ignore case while matching (Using the "i" flag).

let myString = "Hello, John, Peter, Mary, Nadia: Yeah";
let getMach = /Yes|Yeah/i;
let storeMatch = getMach.test(myString);
console.log(storeMatch); // true.

// > Extract Matches.

let myString = "Hello, John, Peter, Mary, Nadia: Yeah";
let getMach = /Yeah/;
let storeMatch = myString.match(getMach);
console.log(storeMatch);

let m = "Hello, World".match(/Hello/);
console.log(m);

/*
-
Note that the .match syntax is the "opposite"
of the .test method you have been using thus far:
*/

// > Find more than the first match.

let  testStr = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/g;
let matches = testStr.match(repeatRegex);
console.log(matches);

// > Match Anything with Wildcard Period

let humStr = "I will hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
let humResult = huRegex.test(humStr);
console.log(humResult); // true

let hugResult = huRegex.test(hugStr);
console.log(hugResult); // true

// > Match Single Character with Multiple Possibilities

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));
console.log(bugStr.match(bgRegex));
console.log(bogStr.match(bgRegex));

// > Match Letters of the Alphabet
// >> Inside a character set, you can define a range of characters to match using a hyphen character: -.

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
console.log(catStr.match(bgRegex));
console.log(batStr.match(bgRegex));
console.log(matStr.match(bgRegex));

// > Match Numbers and Letters of the Alphabet

let mutoStr = "Muto83242309";
let myRegex = /[a-z0-9]/ig;
console.log(mutoStr.match(myRegex));

// > Create a single regex that matches all characters that are not a number or a vowel.

let quoteSample = "3 blind mice.";
let myRegex = /[^0-9^aeiou]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);

// > Match Characters that Occur One or More Times

/*
-
For example, /a+/g would find one match in abc and return ["a"].
Because of the +, it would also find a single match in aabc and return ["aa"].
If it were instead checking the string abab, it would find two matches
and return ["a", "a"] because the a characters are not in a row - there is a b between them.
Finally, since there is no a in the string bcd, it wouldn't find a match.
*/

let difficultSpelling = "Mississippi";
let myRegex = /i+/g; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result);

// > Match Characters that Occur Zero or More Times

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

// > Find Characters with Lazy Matching

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?1>/; // Change this line
let result = text.match(myRegex);
console.log(result);

// > Match Beginning String Patterns

// >> Search for patterns in specific positions in strings.

/*
-
In an earlier challenge, you used the caret character (^) inside a character
set to create a negated character set in the form [^thingsThatWillNotBeMatched].
Outside of a character set, the caret is used to search for patterns at
the beginning of strings.
*/

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);

/*
-
The first test call would return true, while the second would return false
*/

/*
+
Challenge:
Use the caret character in a regex to find Cal only
in the beginning of the string rickyAndCal.
*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

// > Match Ending String Patterns
// >> Search for patterns at the end of strings.

/*
-
You can search the end of strings using
the dollar sign character $ at the end of the regex.
*/

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);

// The first test call would return true, while the second would return false.

/*
+
Challenge:
Use the anchor character ($) to match the string caboose at the end of the string caboose.
*/

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

// > Match All Letters and Numbers

/*
The closest character class in JavaScript to match the alphabet is \w.
This shortcut is equal to [A-Za-z0-9_].
This character class matches upper and lowercase letters plus numbers.
Note, this character class also includes the underscore character (_).
*/

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

/*
-
// All four of these test calls would return true.
// These shortcut character classes are also known as shorthand character classes.
*/

/*
+
// Challenge:
// Use the shorthand character class \w
// to count the number of alphanumeric characters in various quotes and strings.
*/

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;


// > Match Everything But Letters and Numbers

/*
- You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w.
A natural pattern you might want to search for is the opposite of alphanumerics.
You can search for the opposite of the \w with \W. Note,
the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
*/

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);

/* 
- The first match call would return the value ["%"] and the second would return ["!"].
*/

/*
 + Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
*/

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/ig; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;


// > Match All Numbers
/*
 -
You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.
The shortcut to look for digit characters is \d, with a lowercase d.
This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
*/

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/ig; // Change this line
let result = movieName.match(numRegex).length;

// Match All Non-Numbers

/*
- The last challenge showed how to search for digits using the shortcut \d with a lowercase d.
You can also search for non-digits using a similar shortcut that uses an uppercase D instead.
The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9],
which looks for a single character that is not a number between zero and nine.
*/

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/ig; // Change this line
let result = movieName.match(noNumRegex).length;


// > Restrict Possible Usernames

/*
- Usernames are used everywhere on the internet.
They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database.
Here are some simple rules that users have to follow when creating their username:
    Usernames can only use alpha-numeric characters.
    The only numbers in the username have to be at the end.
    There can be zero or more of them at the end. Username cannot start with the number.
    Username letters can be lowercase and uppercase.
    Usernames have to be at least two characters long.
    A two-character username can only use alphabet letters as characters.
*/


let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
// Change this line
let result = userCheck.test(username);


/*
-
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input
*/

// > Match Whitespace

/*
- 
The challenges so far have covered matching letters of the alphabet and numbers.
You can also match the whitespace or spaces between letters.
You can search for whitespace using \s, which is a lowercase s.
This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.
You can think of it as similar to the character class [ \r\t\f\n\v].
*/

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);

/*
-
This match call would return [" ", " "].
*/

// > Match Non-Whitespace Characters

/*
-
You learned about searching for whitespace using \s, with a lowercase s.
You can also search for everything except whitespace.
Search for non-whitespace using \S, which is an uppercase s.
This pattern will not match whitespace, carriage return, tab, form feed, and new line characters.
You can think of it being similar to the character class [^ \r\t\f\n\v].
*/

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;


/*
-
The value returned by the .length method would be 32.
*/

// Specify Upper and Lower Number of Matches

/*
- Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters.
These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers.
Quantity specifiers are used with curly brackets ({ and }).
You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.
*/


let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);


/*
- 
The first test call would return true, while the second would return false.
*/
















