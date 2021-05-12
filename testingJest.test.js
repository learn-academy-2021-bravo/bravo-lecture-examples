// A want to create a function called hello
// This function is going to return a string that hi

describe("hello", () => {
    test ("returns a string that says hi", () => {
    expect(hello()).toEqual("hi")
            })
        })
        
const hello = () => {
    return "hi"
}

// Write a test for a function called greeter
// This function is going to take one argument 
// This function is going to return a string of "Hello, learn student"

describe("greeter", () => {
  test("return a greeting and a name", () => {
   expect(greeter("learn student")).toEqual("Hello, learn student") 
    })
})

const greeter = (name) => {
    return `Hello, ${name}`
} 


// Write a function called trafficLight
// This function is going to take one argument
// 

describe("trafficLight", () => {
 test("returns correct traffic color light", () => {
     expect(trafficLight("green")).toEqual("go") 
     expect(trafficLight("yellow")).toEqual("slow")
     expect(trafficLight("red")).toEqual("stop") 

    })
})

const trafficLight = (color) =>{
    if(color === "green"){
        return "go"
    }
    else if(color === "yellow"){
        return "slow"
    }
    else if(color === "red"){
        return "stop"
    }else{
        "Something went wrong"
    }
} 




// Create a function that takes in an array of words
// This function returns a new array consisting of each words's length


fdescribe("arrayLength", () => {
    
        let arrInput = ["pancake", "biscuit", "coffee", "bacon", "eggs", "hashbrowns"];
    
        let outPut = [7,7,6,5,4,10];
    
        test("return a new array consisting of each string's length",() => {
        
            expect(arrayLength(arrInput)).toEqual(outPut)
        
            });
        });


        
//  const arrayLength = (arr) => {
//      return arr.map(value => value.length) 
//  }
       