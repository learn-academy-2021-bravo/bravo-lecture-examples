
// https://dev.to/howtocodejs/an-overview-of-javascript-functions-47id

// This is a simple Function 

const nameOfFunction = () => {
    return "great job!"
}
// console.log(nameOfFunction())

// This is a function that takes one argument
const greetingBravo = (name) => {
    return `Hello there amazing, intelligent ${name}!`
}
// Here we are invoking our functions multilple times because functions are reusable
// console.log(greetingBravo("Victor"));
// console.log(greetingBravo("Vivean"));
// console.log(greetingBravo("Diego"));
// console.log(greetingBravo("Guillermo"));


// This is a math function with 2 arguments
// // PSEUDO CODING
// Start by declaring a function
// These function is going to take two arguments
// These function is going to substrac num1 - num2 
// Invoke our function

const doMathPlease = (num1, num2) => {
    return num1 - num2 
}

// Here we are invoking our functions multilple times because functions are reusable
// console.log(doMathPlease(2,1));
// console.log(doMathPlease(100,77));
// console.log(doMathPlease(22,12));


// This is a function that takes two arguments
// // PSEUDO CODING
// Start by declaring a function
// This function is going take two arguments
// Use conditionals to compare these two numbers and see which one is bigger
// Invoke your function

const  biggerNumber = (numero1,numero2) => {
    if(numero1 > numero2) {
        return `${numero1} is bigger than ${numero2} `
    }
    else if(numero1 < numero2) {
        return `${numero1} is smaller than ${numero2}`
    }
    else{
        return "Ops, something went wrong!"
    }
}

// console.log(biggerNumber(12,77));
// console.log(biggerNumber(22,1));
// console.log(biggerNumber(2,77));


// Conditionals in functions
// // PSEUDO CODING
// Start by declaring a function
// This function is going to take two arguments
// This function is going to use conditionals to determine the price of my coffeType
// “If the size is large, return a sentence that says “My coffeeType costs $5”
// “If the size is medium, return a sentence that says “My coffeeType costs $4”
// “If the size is small, return a sentence that says “My coffeeType costs $3”


const makeCoffee = (coffeType, coffeeSize) => {
    if (coffeeSize === "large") {
        return `Your ${coffeType} costs $5 dollars`
    }
    else if( coffeeSize === "medium") {
        return `Your ${coffeType} costs $4 dollars`
    }
    else if( coffeeSize === "small") {
        return `Your ${coffeType} costs $3 dollars`
    }
    else {
        return "Ops, you need a coffee!"
    }
} 
// Here we are invoking our functions multilple times because functions are reusable
// console.log(makeCoffee("cappucino","medium"))
// console.log(makeCoffee("iced coffee","large"))
// console.log(makeCoffee("medium"))
