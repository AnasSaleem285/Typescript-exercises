"use strict";
/* Exercise 44

Cars:
Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/
function car(manufacturer, model_name, ...options) {
    let my_car = {
        manufacturer: manufacturer,
        model_name: model_name,
    };
    options.forEach(option => {
        let [key, value] = option.split(":");
        my_car[key.trim()] = value.trim();
    });
    return my_car;
}
console.log(car('Honda', 'Swift', ' color: black', 'Year: 2024'));
