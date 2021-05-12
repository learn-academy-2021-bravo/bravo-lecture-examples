// class Squirrel {
//     constructor(name){
//       this.numberOfNuts = 0
//       this.name = name
//   }
//     findANut(){
//       this.numberOfNuts++;
//   }
//     findNutStash(){
//       let stash = Math.ceil(Math.random() * 20);
//       this.numberOfNuts += stash
//   }
//     eatANut(){
//       this.numberOfNuts--;
//   }
//     climbATree(){
//       this.inATree = true
//   }
//     jumpOutOfATree(){
//       this.inATree = false
//       return "Swoosh"
//   }
//     throwANutAtSomeone(){
//       this.numberOfNuts--;
//       return "bonk";
//   }
//
// }

//
// var surferSquirrel = new Squirrel();
// var pirateSquirrel = new Squirrel("Jack Burrow")
// //
// // // // console.log(surferSquirrel);
// // pirateSquirrel.findNutStash()
// // console.log("pirateSquirrel" ,pirateSquirrel.numberOfNuts);
// // console.log(pirateSquirrel.throwANutAtSomeone());
// // console.log("pirateSquirrel" ,pirateSquirrel.numberOfNuts);
// // console.log(pirateSquirrel.throwANutAtSomeone());
// // console.log("pirateSquirrel" ,pirateSquirrel.numberOfNuts);
// // console.log(pirateSquirrel.throwANutAtSomeone());
// // console.log("pirateSquirrel" ,pirateSquirrel.numberOfNuts);
//
// var squirrels = []
// // pushes new squirrel objects into the array
// squirrels.push(new Squirrel("Alvin"))
// squirrels.push(new Squirrel("Rocky"))
//
// // accessing the object at array index 0
// squirrels[0].findANut()
// squirrels[0].findANut()
//
// // mapping over array to access the information from the squirrels array
// squirrels.map((value, index) => {
//   console.log(`The squirrel at index ${index} named ${value.name} has ${value.numberOfNuts} nuts.`)
// })


class PetUser{
  constructor(name, age, type, email, size){
    this.name = name;
    this.age = age;
    this.type = type;
    this.email= email
    this.size= size
  }
  petProfile(){
    return `${this.name} is a ${this.size} ${this.type} and is ${this.age} years old. ${this.name}'s email is ${this.email}`
  }
  updateEmail(){
    //user inputs a new email and updates the stored data
  }
}
var luna = new PetUser("Luna", 3, "dog", "luna@hotmail.com", "tiny")
var sheldon = new PetUser("sheldon", 2, "dog", "booger@snailmail.com", "small")

console.log(luna.petProfile());
console.log(sheldon.petProfile());
