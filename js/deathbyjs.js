//STEP 1
// function alphaWord(word) {
//     let output = word.split('').sort().join('')
//     return output
// }
// let input = prompt('Please enter a word:')
// console.log(alphaWord(input))

//STEP 2
// function capitalizeString(string) {
//     let words = string.split(' ')
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//     }
//     words = words.join(' ')
//     return words
// }
// let input = prompt('Please enter a phrase:')
// console.log(capitalizeString(input))

//STEP 3
// function countVowels(string) {
//     let numberVowels = string.match(/[aeiou]/gi).length;
//     return numberVowels
// }
// let input = prompt('Please enter a phrase:')
// console.log(countVowels(input))

//STEP 4
// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

// function generateString(length) {
//     let result = ' '
//     const charactersLength = characters.length
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength))
//     }

//     return result;
// }
// let input = prompt('Enter length of password')
// console.log(generateString(input))


//STEP 5
let countryNames = ["Australia", "Germany", "United States of America"]
function longestName(arr) {
    let longest = arr.sort((a, b) => b.length - a.length)
    return longest[0]
}
console.log(longestName(countryNames))