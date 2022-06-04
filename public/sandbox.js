"use strict";
// ******************************************************************
// compile
let mixed1;
let mixed2;
let array = [];
array.push(20, true, 'Ramin');
let user;
user = {
    firstname: "Ramin",
    id: 'ramin3434',
    age: 20
};
let sayHi = (name, age, phone) => {
    return `Hi, I'm ${name} and i have ${age} years old.`;
};
console.log(sayHi('Ramin', 20, 3445));
