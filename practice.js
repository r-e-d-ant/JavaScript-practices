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