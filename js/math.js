//STEP 1 
// let num = prompt('Please enter a number:')
// console.log(Math.abs(num))

//STEP 2
// let num = prompt('Please enter a floating point value (decimal):')
//  console.log(Math.ceil(num))

//STEP 3
// let num = prompt('Please enter a floating point value (decimal):')
//  console.log(Math.floor(num))

//STEP 4 
// let input = prompt('Please enter 5 numbers separated by a comma (,):')
// let stringArray = input.split(',')
// let numberArray = stringArray.map(Number)
// console.log(`The largest number is ${Math.max.apply(0, numberArray)}. The smallest number is ${Math.min.apply(0, numberArray)}`)

//STEP 5 Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.
let input = prompt('Please enter a number')
console.log(`The square root of this number is ${Math.sqrt(input)}`)
