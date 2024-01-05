//STEP 1
// let name = prompt('Please type your name:')
// alert(`Your name has ${name.length} letters`)

//STEP 2 
// let name = prompt('Please type your name:')
// let num = prompt(`Plesae type a number between (1-${name.length})`)
// alert(`You have choosen ${name.charAt(num-1)}`)


//STEP 3 
// let firstName = prompt('Please type your first name:')
// let lastName = prompt('Please type your last name:')
// alert(`Your name is: ${firstName.concat(lastName)}`)

//STEP 4 
// let text = 'The quick brown fox jumps over the lazy dog'
// alert(text.indexOf('fox'))


//STEP 5
// let text = 'The quick brown fox jumps over the lazy fox'
// alert(text.lastIndexOf('fox'))


//STEP 6 
// let text = 'The quick brown fox jumped over the lazy dog'
// let fullName = prompt('Please enter your full name:')
// alert(text.replace('the lazy dog', fullName))


//STEP 7 
// let text = 'The quick brown fox jumps over the lazy dog'
// let ranWord = prompt('Please enter a word:')
// alert(text.match(ranWord))

//STEP 8
// let old_string = 'The quick brown fox jumps over the lazy dog'
// let new_string = old_string.slice(31, 43)
// alert(new_string)

//STEP 9
// let text = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          '
// alert(text.trim().toLowerCase())

//STEP 10 
let text = 'the quick brown fox jumps over the lazy dog'
let firstLetter = text.charAt(0).toUpperCase()
text = text.slice(1, 43)
alert(firstLetter + text)
