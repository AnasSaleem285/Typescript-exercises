"use strict";
/* Exercise 41

Great Magicians:
 Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
  Call show_magicians() to see that the list has actually been modified.*/
let magician_names = [" Anas ", "Osama", "Anmol"];
function Show_magician() {
    console.log("Here is the list of magicians ");
    magician_names.forEach((magician) => {
        console.log(magician);
    });
}
function Make_great() {
}
magician_names.forEach((great) => {
    console.log(`The great ${great}`);
});
