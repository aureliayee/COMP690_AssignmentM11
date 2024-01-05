//STEP 1 Create an application that gets the number of days in a month. Display that result within the console window.

// var mos=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

// for (i = 0; i < 12; i++) {
//     var lastDate = new Date(2024, i+1, 0);
//     console.log(`In 2024, there are ${lastDate.getDate()} days in ${mos[i]}`)
// }

//STEP 2 Create an application that gets the month name from a particular date. Display that result within the console window.
// let date = prompt('Please enter a date (eg. 05/18/2019)')
// date = new Date(date).toLocaleString('en-us', { month:'long' })
// console.log(date);


//STEP 3 Create an application that tests whether a date is a weekend. Display that result within the console window.
// let date = prompt('Please enter a date (eg. 05/18/2019)')
// let dayOfWeek = new Date(date).getDay()
// if (dayOfWeek === 6 || dayOfWeek === 0) {
//     console.log(`This day is on a weekend`);
// } else {
//     console.log(`This day is on a weekday`);
// }

//STEP 4 Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.
// let today = new Date()
// let yesterday = today.setDate(today.getDate()-1)
// yesterday = today.toLocaleDateString('en-us', { weekday:'long' })
// console.log(yesterday)

//STEP 5 Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
let today = new Date()
today = today.toLocaleDateString('en-us', { weekday:'long' })
let firstLetter = today.slice(0,1)
console.log(firstLetter)
