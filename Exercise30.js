"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.username = void 0;
/* Exercise 30
No Users:
  Add an if test to Exercise 29 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.*/
exports.username = ["admin", " Zia Khan", " Kamran Tessori", "Daniyal Nagori", "Amin Alam"];
if (exports.username.length === 0) {
    console.log("We need to find some users");
}
else {
    console.log("list is not empty");
}
// removing all the usersnames from the array
exports.username.length = 0;
if (exports.username.length === 0) {
    console.log("We need to find some users");
}
