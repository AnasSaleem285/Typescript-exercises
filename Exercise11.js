"use strict";
// Exercise 11
//Greetings: Start with the array you used in Exercise 10, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, 
//but each message should be personalized with the person’s name.
let array = ["Anas", "Osama", "Kulsoom"];
array.forEach((person) => {
    console.log(`Hello ${person},would you like to learn some Typescript today`);
});
