// JavaScript Objects 4/11/2021

// Objects - data type in JavaScript that holds a collection of things, in key:value pairs

{key: "value"}

// Key - a symbol which is a JavaScript primitive data type, a unique key, used inside an object
// Value - any JS data type

// Objects are sets of key:value pairs separated by commas
var myObject = {key1: "value1", key2: "value2", key3: "value3"}

// Best practice to drop each key:value onto its own line
var myObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
}
console.log(myObject)
// Returns the entire object

// Dot notation to extract a single value
console.log(myObject.key2)
console.log(myObject.key1)


var breakfast = {
  bfast1: "eggs",
  bfast2: "toast",
  bfast3: "bacon",
  // nested object
  bfast4: {
    fruit1: "banana",
    fruit2: "strawberry",
    fruit3: "blueberry"
  },
  bfast5: "oatmeal"
}

// Trailing comma - comma on the last entry, best practice to not have trailing commas

console.log(breakfast)
// Returns the whole object

console.log(breakfast.bfast2)
// Return the value of "toast"

console.log(breakfast.bfast4)
// Returns the value that is the nested object

console.log(breakfast.bfast4.fruit2)
// Returned the value of "strawberry"

console.log(breakfast.bfast4.bfast3)
// Returns an error


// Destructuring - creating a shortcut to get to the values of a nested object

console.log(breakfast.bfast4.fruit1)
console.log(breakfast.bfast4.fruit2)
console.log(breakfast.bfast4.fruit3)

let { fruit1, fruit2, fruit3 } = breakfast.bfast4
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)


// Objects have staic information and methods, or data and behavior
// this - keyword in JavaScript that references the object while you are inside of the scope of the object
var numberObj = {
  num1: 5,
  num2: 10,
  num3: 3,
  addUp: function() {
    return this.num1 + this.num2 + this.num3
  }
}
// Static data
console.log(numberObj.num1)
console.log(numberObj.num2)
console.log(numberObj.num3)
// Behavior - method is a function that belongs to an object
console.log(numberObj.addUp())


var breakfast = {
  bfast1: "eggs",
  bfast2: "toast",
  bfast3: "bacon",
  // nested object
  bfast4: {
    fruit1: "banana",
    fruit2: "strawberry",
    fruit3: "blueberry"
  },
  bfast5: "oatmeal",
  iAmHaving: function() {
    return `I am having ${this.bfast1} and ${this.bfast4.fruit1} for breakfast.`
  }
}
console.log(breakfast.iAmHaving())
// Returns the string interpolation
console.log(breakfast.iAmHaving)
// Without the parentheses we see just the actual function --> [Function: iAmHaving]


var pets = [
  {name: "Zelda", type: "dog", age: 3},
  {name: "Thor", type: "dog", age: 1},
  {name: "Damien", type: "dog", age: 10},
  {name: "Sheldon", type: "dog", age: 3}
]
// Pets is an array that contains objects
console.log(pets)
console.log(pets.length)

// Create function that take in an array of objects
// map - do something to each item in the array - extract the name of each pet
// Return an array with just the pet names

const getPetName = (array) => {
  return array.map(value => {
    console.log("value:", value)
    return value.type
  })
}
console.log(getPetName(pets))

// Create a funtion that takes in an array of objects
// Return an array of objects where the pet is older than 5
// filter - make a decision based on the pet age

const longLovedPets = (array) => {
  return array.filter(value => {
    return value.age > 5
  })
}
console.log(longLovedPets(pets))
