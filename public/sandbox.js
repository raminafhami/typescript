"use strict";
// ******************************************************************
// compile
;
const person1 = {
    name: "Ramin",
    age: 20,
    speak(text) {
        console.log(text);
    }
};
const greetPerson = (user) => {
    console.log("hello " + user.name);
};
greetPerson(person1);
