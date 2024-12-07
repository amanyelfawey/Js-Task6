// 1- Write a function greet that takes a name and a greeting. If no greeting is provided, use "Hello" by default.

// let username = prompt("Please enter your name");
// let message =document.getElementById('hello')
// function sendGreeting(username ,greetingMsg='Hello') {

//     message.innerHTML=`${greetingMsg} ${username} `
// }
// sendGreeting(username)
//------------------------------------------------------------------------------------------------------------------
// 2 -Combine two arrays into one using the spread operator.

// let countries =['Egypt','Italy','Turkey','France']
// let cities=['Cairo','Rome','Istanbul','Paris']
// let all=[...countries , ...cities]
// console.log(all)

//------------------------------------------------------------------------------------------------------------------


// 3- const user = { name: "Alice", age: 25 }; const location = { city: "Wonderland", country: "Fictional" }
// merge the two objects in one call it userDetails

// const user = { name: "Alice", age: 25 };
// const address = { city: "Wonderland", country: "Fictional" };

// const userDetails={...user ,...address }
// console.log(userDetails)

//------------------------------------------------------------------------------------------------------------------



// 4- Use filter to create an array containing only the even numbers from [1, 2, 3, 4, 5, 6, 7, 8,10]


// let numbers=[1, 2, 3, 4, 5, 6, 7, 8,10];
// const evenNumbers=numbers.filter(numbers => numbers%2===0)
// console.log(evenNumbers);

//------------------------------------------------------------------------------------------------------------------



// 5- write a function that takes 2 params (list, comaprisonUumber) filters out numbers less than the given number

// let list=[1, 2, 3, 4, 5, 6, 7, 8,10];
// let comaprisonNumber=parseInt(prompt("Please Enter a number between 0 and 10" ));

// const getLessNumber=function(list ,comaprisonNumber){
//   return (list.filter(numbers => numbers < comaprisonNumber))
// }
// console.log(getLessNumber(list ,comaprisonNumber))

//------------------------------------------------------------------------------------------------------------------



// 6- const person = {
//   name: "Alice",
//   age: 25,
//   city: "Wonderland"
// };
// use object destructure to store each value in separate variable 
// change variable names to be different than the property name


// const person = {
//   name: "Alice",
//   age: 25,
//   city: "Wonderland"
// };
// let { name: username, age: userAge, city: userCity } = person;
// console.log(username);
// console.log(userAge);
// console.log(userCity);
//------------------------------------------------------------------------------------------------------------------


// 8- use Set to remove duplicate values from a list and use has and delete to adjust the Set

// let numbers=[1, 2,2, 3, 4, 5,5, 6, 7,7, 8,9,10];
// let numbersSet=new Set(numbers)
// console.log(numbersSet)
// console.log(numbersSet.has(9))
// numbersSet.delete(1)
// console.log(numbersSet)

// 9- referring the point 8 convert Set to array and use push and pop instead of has and delete 
// let arrNumbers =Array.from(numbersSet)
// console.log(arrNumbers)
// arrNumbers.push(11)
// console.log(arrNumbers)
// arrNumbers.pop()
// console.log(arrNumbers)
// console.log(arrNumbers.includes(5));

// 10- use includes and startsWith and endsWith to check if something in string or array [try on both of them]

// let text = "Hello, World!";

// console.log(text.startsWith("k"));
// console.log(text.startsWith("H"));
// console.log(text.endsWith("!")); 

// console.log(text.includes("World"));