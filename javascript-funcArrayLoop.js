// Create a function, given a list of names, that returns a list of name tag greetings
// For example, "Churro", the printed text should look like "Hi! My name is Churro!"

// Input: array of strings (e.g. ["Churro", "Thor", "Zelda", "Sheldon", "Taco"])
// Output: array of strings (e.g. ["Hi! My name is Churro!", "Hi! My name is Thor!", "Hi! My name is Zelda!", "Hi! My name is Sheldon!", "Hi! My name is Taco!"])

// create a function that takes one parameter 
const makeGreetings = (names) => {

// initialize a variable to storing the list of name tag greetings
  let nameGreetings = []; 

// for each name in the list that I'm given
  for (let i=0; i<names.length; i++) {
    // names[i]
// create a greeting with the name
    // `Hi! My name is ${names[i]}`

// store greeting into variable for name tag greetings
    nameGreetings.push(`Hi! My name is ${names[i]}!`)
  }
// return the list of greetings
  return nameGreetings
}

let petNames = ["Churro", "Thor", "Zelda", "Sheldon", "Taco"];
// console.log(makeGreetings(petNames))

let bravo = ["Diego", "Jonathan", "Hex", "Kevin", "Shazeen", "Vivean", "Chris", "Raymond", "Erik", "Guillermo", "Marcus", "Sarah", "Austin", "Mina"]
// console.log(makeGreetings(bravo))


// Prompt: Given a list of numbers, create a function that returns only the odd numbers

// Input: array of numbers [0, 1, 4, 7, 98, 35]
// Output: array of numbers [1, 7, 35]

//create a function that takes a list of numbers
const getOnlyOddNumbers = (numbers) => {

// initialize a variable to store the new list of numbers
  let oddNumbers = [];

// for each given number
  for (let i=0; i<numbers.length; i++) {

// determine  if the number is odd
    if (numbers[i] % 2 !== 0) {

// if odd, store into the new list of numbers
      // [1,7]
      oddNumbers.push(numbers[i])

    }
  }

// return the new list of numbers
  return oddNumbers
}

let banana = [0, 1, 4, 7, 98, 35];
console.log(getOnlyOddNumbers(banana))
