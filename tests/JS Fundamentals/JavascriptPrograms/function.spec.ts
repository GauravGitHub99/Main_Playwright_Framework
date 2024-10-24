// call declarative function even before function definition function 
helloOne()

// Declarative function
function helloOne(){
    console.log(" Hello One! ")
}

// Anonymus function
var HelloTow = function () {
    console.log("Hello two!")
}

HelloTow()

// ES6 function syntax or arrow function
var helloThree =  (one) => {
    console.log("Hello three!" + one)
}
helloThree(1)

// Function with arguments
function printName(name, lastName){
    console.log(name+" "+lastName)
}
printName("Gaurav", "Suryawanshi");


// function with return
function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(5)
console.log(myResult)

// import function
import { printAge } from '../helpers/printHelper.js'
printAge(5)

//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(18)

