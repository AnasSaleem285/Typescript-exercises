"use strict";
/* Exercise 37

Cities:
Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value. Call your function for three different cities,
at least one of which is not in the default country.*/
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
//default value of country.
describe_city("karachi");
//1st city
describe_city("Lahore");
// 2nd city
describe_city("Islamabad");
//3rd city
describe_city("Peshawar");
