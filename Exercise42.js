"use strict";
/* Exercise 42

Unchanged Magicians:
Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
function show_magician(magician) {
    magician.forEach(magicians => console.log(magicians));
}
function make_great(magician) {
    return magician.map(magicians => (` The Great ${magicians}`));
}
let magician_name = [" Anas ", "Osama", "Anmol"];
let copy_magicain_name = magician_name.slice();
let copy_great_magician = make_great(copy_magicain_name);
console.log("Original Array\n");
show_magician(magician_name);
console.log("Copied Array\n");
show_magician(copy_great_magician);
