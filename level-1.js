/*
  Level 1
*/
// question 1
// declare and initialise a variable with a string value

var sayHello = "Hello";

// question 2
// create an object variable and give it two properties (a key and a value)

var person = {
  name: "Jane",
  age: 20
};

// question 3
// create a variable with a boolean value

var outOfStock = true;

// create an if else statement that checks the value

if (outOfStock === true) {
  console.log("Out of stock");
}
else {
  console.log("In stock");
}

// question 4
// create an array of five numbers

var fiveNumbers = [1, 2, 3, 4, 5];

// loop through the array and console log each value

for (var i = 0; i < fiveNumbers.length; i++) {
  console.log(fiveNumbers[i]);
}

// question 5
// create a for loop that counts 15 - 25. Console log the value

for (var count = 15; count <= 25; count++) {
  console.log(count);
}

// question 6
// log the value of the counter variable = 20

for (var count = 20; count <= 20; count++) {
  console.log(count);
}

// question 7
// create an array of two objects

var twoPersons = [
  // first object
  {
    nameOfThePerson: "Elise",
    ageOfThePerson: 22,
    isThePersonAStudent: true
  },
  // second object
  {
    nameOfThePerson: "Bill",
    ageOfThePerson: 55,
    isThePersonAStudent: false
  }
];
//Loop through the array and console log the number value and the boolean value

 for (var i = 0; i < twoPersons.length; i++) {
   console.log("Age of the person: " + twoPersons[i].ageOfThePerson);
   console.log("Is the person a student? " + twoPersons[i].isThePersonAStudent);
 }

// question 8
// create a function with one argument

function whatIDontLike(iDoNotLike) {
  console.log("I don't like " + iDoNotLike);
}
var iDoNotLike = "rain";
whatIDontLike(iDoNotLike);

// question 9
// create a function with two arguments

function resultOfTwoNumbers(num1, num2) {
  //subtract the second argument from the first and console log the result
  var resultOfTwoNumbers = num1 - num2;
  console.log(resultOfTwoNumbers);
}
var number1 = 50;
var number2 = 20;

resultOfTwoNumbers(number1, number2);

// question 10
// create an empty array
var emptyArray = [];
// create a function with one argument, add the argument to the array
function oneArgumentToArray(argumentToArray) {
  emptyArray.push(argumentToArray);
  console.log(argumentToArray);
}
// call the function with a value of any type
oneArgumentToArray("Hi");




//
