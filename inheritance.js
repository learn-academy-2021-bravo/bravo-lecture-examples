// Class inheritance
//  Inheritance is a relationship
// All dogs have similar traits 
// Inheritance is the process of one class inheriting
// properties and methods from another (parent) class
// A Husky is a Dog
// A Pittbull is also a dog

// Parent Class
class Dog{
  constructor() {
    this.paws = 4
    this.ears = "pointed"
  
  }

  run(){
    this.mph = 20
  }

}

// let dog = new Dog
// console.log(dog)
// console.log(`this dog has ${dog.ears} ears and it also has ${dog.paws} paws `)
// dog.run()
// console.log(`this dog can run ${dog.mph} miles per hour!`)

// Child Class

class Pittbull extends Dog {
  constructor(){
    super()
    this.ears = "floppy"
    this.colors = "Brown and Black"
  }
  climb(){
    this.wall = 12
  }
}

let pitbull = new Pittbull()
console.log(`My pitbull has ${pitbull.ears} ears!` )
pitbull.run()
console.log(`Did you know that some pitbulls can climb ${pitbull.wall} feet walls and can run ${pitbull.mph} mph? `)

// Child Class!

class Otterhound extends Dog {
  constructor(){
    super()
    this.ears = "floppy"
  }
  swim(){
    this.time = 11
  }

}

// Child class extends from a nother child class 
class Otterhound extends Pittbull {
  constructor(){
    super()
    this.ears = "floppy"
  }
  swim(){
    this.time = 11
  }

}

// let otterHound = new Otterhound()
// console.log(otterHound)
// otterHound.swim();
// otterHound.run()
// otterHound.climb()
// console.log(otterHound.time);
// console.log(otterHound.mph);
// console.log(otterHound.wall);





// Parent Class

class Starbucks {
  constructor(shots, temperature, flavor){
    this.size = "grande"
    this.price = 4
    this.type = "dark"
    this.shots = shots
    this.temperature = temperature
    this.flavor = flavor
  
  }
  freeCoffee(){
   this.stars = 150
  }
}

// let myStarbucks = new Starbucks(4,160)
// console.log(myStarbucks)
// myStarbucks.freeCoffee()
// console.log(`A free coffee at Starbucks costs ${myStarbucks.stars} stars and you can add as many as ${myStarbucks.shots} of espresso `);
// console.log(`I just bought a ${myStarbucks.size} ${myStarbucks.type} coffee
// , and it cost ${myStarbucks.price} dollars! `)


// Single Inheritance
class Latte extends Starbucks{
  constructor(shots, temperature, flavor){
    super(shots, temperature, flavor)
    this.price = 5
    this.type = "latte"
  }
  customized(){
    this.stirr = true
  }
}

let latte = new Latte(7,178, "Hazelnut")
latte.customized()
console.log(latte)


// Multi Level Inheritance
class Mocha extends Latte{
  constructor(shots, temperature){
    super(shots, temperature)
    
  }

  iced(){
    this.shaken = true
  }
}

let mocha = new Mocha(3,190)
mocha.iced()
mocha.customized()
console.log(mocha)
console.log(mocha.stirr);

