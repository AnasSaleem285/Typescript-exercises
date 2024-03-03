"use strict";
/*  Exercise 22
Conditional Tests:
Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
// Test 1: Is car equal to 'subaru'? I predict True.
let bird = 'parrot';
console.log("Is parrot == 'parrot'? I predict True.");
console.log(bird == 'parrot');
// Test 2: Is parrot not equal to 'animal'? I predict True.
console.log("Is parrot != 'animal'? I predict True.");
console.log(bird != 'animal');
// Test 3: Is parrot starts with letter 'p' ? I predict True.
console.log("Is parrot starts with letter 'p'? I predict True.");
console.log(bird[0] == 'p');
// Test 4: Is parrot have 6 letters? I predict True.
console.log("Is parrot have 6 letters? I predict True.");
console.log(bird.length == 6);
// Test 5: Is parrot have string 'arr' ? I predict True.
console.log("Is parrot have string 'arr'? I predict True.");
console.log(bird.includes('arr'));
// Test 6: Is parrot second letter is 'r'? I predict False.
console.log("Is parrot second letter is 'r'? I predict False.");
console.log(bird[1] == 'r');
// Test 7: Is parrot is written in uppercase? I predict False.
console.log("Is parrot is written in uppercase? I predict False.");
console.log(bird == bird.toUpperCase());
// Test 8: Is parrot does not contain vowel characters? I predict False.
console.log("Is parrot does not contain vowel characters. I predict False.");
console.log(bird.match(/[aeiou]/g) == null);
// Test 9: Is parrot starts with 'arr'? I predict False.
console.log("Is parrot starts with 'arr'? I predict False.");
console.log(bird.startsWith('arr'));
// Test 10: Is parrot ends with 'rro'? I predict False.
console.log("Is parrot ends with 'rro'? I predict False.");
console.log(bird.endsWith('rro'));
