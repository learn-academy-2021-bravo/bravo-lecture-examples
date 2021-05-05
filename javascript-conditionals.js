// JavaScript Conditionals 4/5/2021

// conditional - has to start with an "if" statement
// every if and every else if must have to something to evaluate
// the evaluation must return true/false value
// as soon as the program reaches a true evaluation the executable code will run and the program is finished
// else is the catch all, if nothing else is true the else statement will run
// string iterpolation / template literal - `` back ticks and ${javascript code here}


// The most simple conditional statement we can create is just an "if" statement
if(5 > 3) {
  console.log("this is true")
}


var myNum = "hello"

// Adding additional decisions to the conditional statement using "else if"
if(myNum > 7) {
  console.log("the num is greater than 7")
} else if(myNum < 7) {
  console.log("the num is less than 7")
} else if(myNum === 7) {
  console.log("the number is 7")
}

// Adding "else" as a catchall statement
if(myNum > 7) {
  console.log("the num is greater than 7")
} else if(myNum < 7) {
  console.log("the num is less than 7")
} else if(myNum === 7) {
  console.log("the number is 7")
} else {
  console.log("something went wrong")
}

// Changing the variable to test different outcomes
var myName = "Sarah"
// var myName = "Sarah Proctor"
// var myName = 8

if(myName.length > 10) {
  console.log(`The variable ${myName} is more than 10 characters.`)
} else if(myName.length < 10) {
  console.log(`The variable ${myName} is less than 10 characters.`)
} else {
  console.log("Something went wrong.")
}

// Example from the challenges
// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var item = 150

if(item <= 100) {
  console.log("In budget")
} else {
  console.log("Too much")
}
