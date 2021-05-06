// basic loop using an incrementing operator (++)
// for(let i=0; i<3; i++) {
//   console.log(i);
// }

// loop without using console.log - instructions are still being run
// for(let i=0; i<3; i++) {
//   i + 3;
// }

// basic loop using a decrementor (--)
// for(let a=10; a>0; a--) {
//   console.log(a);
// }

// infinite loop - conditional is always true
// for(let i=1; i<0; i++) {
//   console.log(i);
// }

// for(let i=0; i<10; i++) {
//   console.log("Hello!");
// }

// scope 

// iterating through a string
// let letters = "Churro";

// for(let i=0; i<letters.length; i++) {
//   console.log(letters[i]);
// }

// iterating through an array
// let falalalas = ["fa", "la", "la", "laaaaa"];

// for(let i=0; i<falalalas.length; i++) {
//   console.log(falalalas[i]);
// }

// let evenNumbers = [0, 2, 4 ,6];
// for(let i=0; i<evenNumbers.length; i++) {
//   console.log(evenNumbers[i] * 5)
// }

// console.log(evenNumbers)

let someMoreNumbers = [0, 2, 3, 0, 5, 6, 0, 789, 4];
for(let i=0; i<someMoreNumbers.length; i++) {
  if (someMoreNumbers[i] !== 0) {
    console.log(someMoreNumbers[i]);
  }
}