"use strict";
/* Exercise 36

Large Shirts:
Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function make_shirt(size = "large", message = "I love typescript") {
    console.log(` The Size of t-shirt is ${size} and message is ${message} `);
}
// large shirt with default message.
make_shirt();
// medium shirt with default message.
make_shirt("M");
// any size with a different message.
make_shirt("S", "Hello Typescript");
