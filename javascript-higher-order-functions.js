// JavaScript Higher Order Functions 5/10/2021


// Built in methods - popular actions in code, wrapper over a chunk of code functionality
// Syntactical suagr - a piece of syntax created to make a programming language sweeter
// Designed to act on a particular data type
// "..is not a function" - wrong data type or undefined by the program
// Some built in methods take arguments, some don't

// Higher order functions - subset of built in method taht take an argument of a function
// Act on arrays
// Iteration - the process of repeating a code block a specific number or times or until a condition is met
// Code block - the thing inside of {}
// "Doing something to each item (map) || making a decision about each item"


// What data types do we perform iteration on? Array, string - list, collection of characters or items, indexes (zero indexed), can be stored in variables, length property, length - 1 = last index of an array or string, value

// var myArray = [4, 5, 6, 7]
// myArray[index] = value at that index

// For Each
// [2, 3, 4, 5].forEach()
// Does something for each item in an array
// Starts at the index 0
// Ends when hits the length
// Can take the parameter: value, index, array

[2, 3, 4, 5].forEach(value => {
  console.log(value)
})
// parameter can be defined by the developer, but the parameter will always be value
[2, 3, 4, 5].forEach(banana => {
  console.log(banana)
})

// First parameter - value
// Second parameter - index
[2, 3, 4, 5].forEach((value, index) => {
  console.log("value:", value)
  console.log("index:", index)
  // console.log("value:", value, "index:", index) (same thing)
  console.log("--------")
})


// One level of abstraction away from calling .forEach directly on the array
var myArray = [2, 3, 4, 5]
myArray.forEach((value, index) => {
  console.log("value:", value)
  console.log("index:", index)
  // console.log("value:", value, "index:", index) (same thing)
  console.log("--------")
})

// Map - acts on array, iterates, has 3 possible parameters 1) value, 2) index, 3) array itself
// More efficient version of for loop and pushing into an empty array

console.log([5, 6, 7, 8].map(value => {
  return value * 2
}))

let testingArray = [5, 6, 7, 8].map(value => {
  return value * 2
})
console.log(testingArray)

let bravoNames = ["Diego", "Vivean", "Kevin"]
let greetings = bravoNames.map(value => {
  // return `Hi, ${value.toUpperCase()}`
  return value.toUpperCase()
})
console.log(bravoNames)
console.log(greetings)

// Map when you have an array and you want to do something to every item in the array
// Map will return an array the same length as the array it is acted on

// Filter - higher order function, acts on an array, has 3 possible parameters 1) value, 2) index, 3) array, returns an array
// Built conditional statement
// Return all the items that meet a particular condition

let myNumsArray = [5, 6, 7, 8, 9]
let filteredNums = myNumsArray.filter(value => {
  // whatever makes this condition true gets added to the output array, anything else gets ignored
  return value % 2 !== 0
})
console.log(myNumsArray)
console.log(filteredNums)



// Create a function that takes in an array of numbers and returns an array with each number multiplied by 5.
// Expected output: [15, 35, 0, 30, -45]
var myNumbers1 = [3, 7, 0, 6, -9]

// Create a function called mult5
// Parameter - array
// Iterate using map
// Multiple each value by 5
// Return an array

const mult5 = (array) => {
  return array.map(value => {
    return value * 5
  })
}

// Another way to look at it:
const mult5 = (array) => {
  let finalArray = array.map(value => {
    // []
    // [15]
    // [15, 35]
    // [15, 35, 0]
    // [15, 35, 0, 30]
    // [15, 35, 0, 30, -45]
    return value * 5
  })
  return finalArray
}
console.log(mult5(myNumbers1))

// Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// Create a function called removeVowels
// Parameter - string
// Change the string into an array
// Iterate - filter - returning a subset of our input
// If each character is a not a vowel
// Change array to string
// Return the variable that holds the string
// Invoke function

const removeVowels = (string) => {
  let newArray = string.split("")
  console.log(newArray)
  let arrayNoVowels = newArray.filter(value => {
    return value.toLowerCase() !== "a" && value.toLowerCase() !== "e" && value.toLowerCase() !== "i" && value.toLowerCase() !== "o" && value.toLowerCase() !== "u"
  })
  console.log(arrayNoVowels)
  return arrayNoVowels.join("")
}

console.log(removeVowels(stringWithVowels1))
console.log(removeVowels(stringWithVowels2))
