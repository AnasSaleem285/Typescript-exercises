"use strict";
/*  Exercise 17
Seeing the World:
  Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
// In non alphabetical order
let non_alpha = ["Makkah", "Madinah", "Japan", "Dubai", "Canada"];
console.log("In original order: ", non_alpha);
// In alphabetical order
let alpha = non_alpha.slice();
alpha.sort();
console.log("In alphabetical order: ", alpha);
// showing that array is in its original order
console.log("Array is in original order", non_alpha);
// in reverse alphabetical order
let reverse1 = alpha.slice();
reverse1.reverse();
console.log("In reverse alphabetical order: ", reverse1);
// showing that array is in its original order
console.log("Array is in original order", non_alpha);
// Again reverse alphabetical order
let reverse2 = reverse1.slice();
reverse2.reverse();
console.log("Again reverse alphabetical order: ", reverse2);
// final reverse alphabetical order
let reverse3 = reverse2.slice();
reverse3.reverse();
console.log("Final reverse alphabetical order: ", reverse3);
// again sort
let sort = reverse3.slice();
sort.sort();
console.log("In  alphabetical order: ", sort);
// Final sort
let final_sort = sort.slice();
final_sort.reverse();
console.log("In  reverse alphabetical order: ", final_sort);
