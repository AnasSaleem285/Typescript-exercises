"use strict";
/* Exercise 40

Magicians:
 Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.*/
let magicians_names = [" Anas ", "Osama", "Anmol"];
function show_magicians() {
    console.log("Here is the list of magicians ");
    magicians_names.forEach((magician) => {
        console.log(magician);
    });
}
show_magicians();
