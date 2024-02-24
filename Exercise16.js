"use strict";
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
console.log("\nHey, I've found a new bigger dining table\n");
// adding elements into an array
guest.unshift("Amin Alam");
guest.splice(3, 0, "Muhammad Qasim");
guest.push("Sir Imran");
console.log("    Invitation");
guest.forEach((sir) => {
    console.log(`Dear ${sir}, I would be honored if you could join us for a delightful dinner at my home.`);
});
console.log("\nI apologize, but my dining table won't be arriving soon, so I can only invite two guests at the moment.\n");
while (guest.length > 2) {
    let removed_guest = guest.pop();
    if (removed_guest) {
        console.log(`Sorry, ${removed_guest}, I can't invite you to dinner. `);
    }
}
console.log(`\n`);
guest.forEach((sir) => {
    console.log(`Dear, ${sir} you are still invited!`);
});
guest.length = 0;
console.log("Guest list is now empty.", guest);
