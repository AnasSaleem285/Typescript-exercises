"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favorite_car = void 0;
/*  Exercise 21

Intentional Error:
If you haven’t received an array index error in one of your programs yet,
try to make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.*/
exports.favorite_car = ["Honda CIVIC", "BMW", "Ferrari"];
// Intentional error: Access an index that doesn't exist
console.log(exports.favorite_car[3]);
// Correcting the error by accessing a valid index
console.log(exports.favorite_car[2]);
