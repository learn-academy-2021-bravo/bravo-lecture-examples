// JavaScript

// Dynamic, interpreted, scripting language
// JavaScript file should be lowercase letters, no spaces, .js extension
// run the file $ node <filename>
// comments are ignored by the processor - // or command + ?/

// Data Types
// 6 primitive data types

// Number
  // Integers
  42
  // Floats
  3.14
  // Math
  5 + 3
  5 - 2
  5 * 4
  15 / 3

  // console.log(5 ** 4)
  // modulo - return the remainder of a division problem
  // console.log(5 % 3)
  // console.log(100 % 10)
  // console.log(2938739857349875348975)
  // atom - log + tab
  // vs code - cl + tab


// String - a collection of characters wrapped with double or single quotations
// console.log("Hello, Bravo")
// console.log('Hello, Bravo')
// console.log("42")
// console.log(42)

// String concatenation - joining multiple strings
// console.log("HELLO" + "WORLD")
// console.log("HELLO" + " WORLD")
// console.log("DIE''GO")
// console.log('DIE "GO"')

// .length - get the length of a string
// console.log("BRAVO".length)
// console.log("BRAVO COHORT".length)
// console.log("HELLO WORLD KSJLKSDJFLKSDJFLKSDJF".length)

// Index - used to access a character within a string; location of a character; square brackets;
// Javascript is zero-based, meaning the order/location begins at zero

// console.log("BRAVO"[0])
// outputs: "B"
// console.log("BRAVO"[1])
// outputs: "R"

// Built-in methods: pre-written functionality within the language

// .indexOf() - returns the location of the provided character within a string
// console.log("BRAVO".indexOf("B"))

// .toUpperCase() - returns a string of upper-cased letter(s)
// console.log("these are all lowercased".toUpperCase())
// outputs: "THESE ARE ALL LOWERCASED"

// .charAt() - returns a character at the specific index
// console.log("BRAVO".charAt(0))

// Type coercion - feature of Javascript where operations between different data types are still evaluated

// console.log("hello" + 1)
// outputs: "hello1"

// console.log(100 + "hello world")
// console.log(100 + "2")
// console.log("23342" + 1)



// Boolean
// console.log(true)
// console.log(false)

// Relational operators - returns a Boolean value
// console.log(4 > 8)
// < > <= >=

// Equality operators

// loose equality
// console.log("hey" == "hey")
// output: true
// console.log(8 == "8")
// output: true
// type coersion - JavaScript will try and compare incompatable data types

// strict equality
// console.log("hey" === "hey")
// output: true
// console.log(8 === "8")
// output: false

// Logical Operators
// && - logical "and"
// console.log(6 > 3 && 10 > 9)
// outcome: true
// console.log(6 > 3 && 8 > 9)
// outcome: false

// || - logical "or"
// console.log(6 > 3 || 10 > 9)
// outcome: true
// console.log(6 > 3 || 8 > 9)
// outcome: true

// ! - bang operator - logical negation
// console.log(!true)
// outcome: false
// console.log(5 !== 8)
// output: true

// Null - equal to nothing in your program
// console.log(null)
// output: null

// Symbol - unique identifiers that are used for keys

// Undefined - value of a variable that has been declared but not assigned
// var myName
// console.log(myName)
// output: undefined

// Variables

// Declarations
// Keywords in JavaScript:
// var - global scope
// let - local scope
// const - cannot be reassigned

var myName = "Sarah"
// first letter is lowercase, no spaces, descriptive
// camelCase - iAmWritingToYouInCamelCase, naming convention in JavaScript
// console.log(myName)
myName = "Mina"
// console.log(myName)
myName = 7
// console.log(myName)
myName = true
// console.log(myName)

const myLunch = "sandwich"
console.log(myLunch)
// output: "sandwich"
myLunch = "burrito"
console.log(myLunch)
// output: error


// Recap and Takeaways
// to run a JS file we need a file with a .js extension
// see your output - console.log()
// makes sure you are in the correct directory, $ node <filename>
// 6 primitive data types - number, Boolean, null, undefined, string, symbol
// variable declaration, name (camelCase), single equal sign, data type
// always pay attention to the data type when performing action or evaluation
