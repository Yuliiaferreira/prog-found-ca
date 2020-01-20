/*
  Level 2
*/

// question 1
// using the loop from question 5 log the counter if it is an even number
for (var count = 15 + 1; count < 25; count = count + 2) {
  console.log(count);
}
 // using the modulus operator and if statement
for(var i = 15; i <= 25; i++){
   if(i % 2 === 0){
console.log(i);
   }
}

// question 2
// create a function
function innerFunction(innerFunction) {
  console.log(innerFunction);
}
  var innerFunction = "I am a function";

// create another function with one argument
function outerFunction(outerFunction) {
  console.log(outerFunction);
}
outerFunction(innerFunction);
