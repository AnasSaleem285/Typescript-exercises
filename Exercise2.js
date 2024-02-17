// project no.1
//Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.
var personname = "anmol saleem";
var lowercasename = personname.toLowerCase();
console.log(lowercasename);
var uppercasename = personname.toUpperCase();
console.log(uppercasename);
var titleCaseName = personname
    .split(' ')
    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
    .join(' ');
console.log(titleCaseName);
