"use strict";
/*  Exercise 15
More Guests:
You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 14. Add a print statement to the end of your program informing people that
  you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
let guest = ["Kamran Tessori", "Daniyal Nagori", "Zia Khan"];
console.log("    Invitation");
guest.forEach((sir) => {
    console.log(`Dear ${sir}, I would be honored if you could join us for a delightful dinner at my home.`);
});
console.log("\nAnouncment!\n");
let guest2 = guest[0];
console.log(`Regrettably, Our guest ${guest2} is unable to join us for dinner due to unforeseen circumstances.`);
console.log("    New invitation\n ");
let new_guest = "Anwar-ul Haq Kakar";
guest[0] = new_guest;
guest.forEach((sir) => {
    console.log(`Dear ${sir}, I would be honored if you could join us for a delightful dinner at my home.`);
});
console.log("\nHey, I've found a new bigger dinning table\n");
// adding elements into an array
guest.unshift("Amin Alam");
guest.splice(3, 0, "Muhammad Qasim");
guest.push("Sir Imran");
console.log("    Invitation");
guest.forEach((sir) => {
    console.log(`Dear ${sir}, I would be honored if you could join us for a delightful dinner at my home.`);
});
