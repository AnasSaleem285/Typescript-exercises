"use strict";
/*  Exercise 23
 More Conditional Tests:
 You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
 write more tests. Have at least one True and one False result for each of the following:

•1 Tests for equality and inequality with strings
•2 Tests using the lower case function
•3 Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
•4 Tests using "and" and "or" operators
•5 Test whether an item is in a array
•6 Test whether an item is not in a array  */
//•1 Tests for equality and inequality with strings
// For equality
let language1 = "typescript";
let language2 = "Python";
console.log('Is typescript equal to python? I predict False');
console.log(language1 == language2);
// For inequality
console.log('Is typescript not equal to python? I predict True');
console.log(language1 != language2);
//•2 Tests using the lower case function
console.log('Is typescript in lowercase? I predict True');
console.log(language1.toLowerCase() == "typescript");
console.log('Is Python in lowercase? I predict False');
console.log(language2.toLowerCase() == "Python");
//•3 Numerical tests involving equality and inequality, 
//   greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 5;
//Equality tests
console.log('Is 10 = 5, I predict false');
// Inequality
console.log('Is 10!= 5, I predict true');
console.log(num1 != num2);
//Greater than
console.log(`Is 10 > 5? I predict true`);
console.log(num1 > num2);
//Less than
console.log(`Is 10 < 5? I predict False `);
console.log(num1 < num2);
//Greater than or equal to
console.log(`Is 10 greater than or equal to 5? I predict true`);
console.log(num1 >= num2);
//Less than or equal to
console.log(`Is 10 less than or equal to 5? I predict false`);
console.log(num1 <= num2);
//•4 Tests using "and" and "or" operators
let x = 10;
let y = 15;
let z = 20;
//  "and" operator true
console.log(' 10<15 && 15<20, I predict true');
console.log(x < y && y < z);
// "and" operator false
console.log(' 10>15 && 15<20, I predict False');
console.log(x > y && y < z);
//  "or" operator true
console.log(' 10<15 || 15>20, I predict True');
console.log(x < y || y > z);
//  "or" operator false
console.log(' 10>15 || 15>20, I predict False');
console.log(x > y || y > z);
//•5 Test whether an item is in a array
let arraytest = [1, 2, 3, 4, 5];
console.log('Is 2 in the array[1, 2, 3, 4, 5]? I predict True');
console.log(arraytest[1] == 2);
//•6 Test whether an item is not in a array  */
console.log('Is 6 in the array[1, 2, 3, 4, 5]? I predict False');
console.log(arraytest[5] == 6);
