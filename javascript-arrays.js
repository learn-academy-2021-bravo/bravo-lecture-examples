// This is why arrays are so useful! Instead of having multiple car variables, we can have one
// varariable with holding multime elements, in this case cars, by using an array.

var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMW";
var cars = ["Saab", "Volvo", "BMW"];


//____________________________________________________________

// Mutators - push()

// Let's use the method push to push two new values into the end of our array
var myColors = ["red", "green", "blue"]
var students = ["Chris", "Vivean", "Diego"]
students.push("Hector", "Marcus")
console.log(students)
myColors.push("black", "teal")
console.log(myColors)
console.log(myColors.length)
//____________________________________________________________

// Mutators- .pop()
// Removes the last value in an array
// Notice how this method does not take an argument!
students.pop()
console.log(students);
myColors.pop()
// Console log it! Teal is gone.
console.log(myColors)
//____________________________________________________________

// Mutators- .shift()
// Removes the value at the zeroth index of the array
students.shift()
console.log(students);
// Notice again how this method does not take an argument!
myColors.shift()
// Console log it. Red is gone AND teal is also not there because this method is a mutator!
console.log(myColors)
//____________________________________________________________

// Mutators- .unshift(value)
// Adds a value to the beginning of an array
// This method does take an argument
students.unshift("Chris")
console.log(students)
myColors.unshift("magenta")
console.log(myColors)

//____________________________________________________________


// Mutators- .reverse()
// Reverses the order of the values in an array
// Notice again how this method does not take an argument!
students.reverse()
console.log(students)
myColors.reverse()
console.log(myColors)
//____________________________________________________________

// ACCESORS

// accesors .indexOf()
// Returns the index of the first instance of a given value
console.log(myColors.indexOf("blue"))
console.log(students.indexOf("Chris"))

//____________________________________________________________

// accesors join("")
// Converts all values in an array to a string
var myName = ["p", "r", "i", "s", "c", "i", "l","a"]
console.log(myName.join("     "))

//____________________________________________________________

// Accessors- .concat()
// Let's start by declaring two variables
// Merges two or more arrays to form one combined array
var letters1 = ["m", "o", "n"]
var letters2 = ["d", "a", "y"]

console.log(letters1.concat(letters2))

//____________________________________________________________

// Array Destructuring

var [month, day, time] = ["May", "Wedneday", "2:30 PM"]

console.log(month)
//____________________________________________________________


var [firstName, lastName] = ["Bruce", "Wayne"]

console.log(firstName)


console.log(lastName)
