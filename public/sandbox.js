"use strict";
// ******************************************************************
// compile
// const firstName = "Ramin";
// console.log(firstName);
// const inputs = document.querySelectorAll('input');
// console.log(inputs);
// inputs.forEach(x => console.log(x));
// ******************************************************************
// types
// const circ = function(diameter: number) {
//     return diameter * Math.PI;
// };
// console.log(circ(2.5));
// ******************************************************************
// arrays
// let names = ['Ramin', 'Shahram', 'Milad'];
// names.push('Sina');
// names[2] = 'Gorzin';
// let numbers = [10, 20, 30, 40];
// let mixed = [10, 20, 'Ramin', true];
// ******************************************************************
// objects
// let persopn = {
//     name: 'Ramin',
//     age: 25,
//     isMale: true
// }
// persopn = {
//     name: 'Sina',
//     age: 15,
//     isMale: true
// }
// ******************************************************************
// explicit types
// let firstName: string;
// let age: number;
// let isMale: boolean;
// firstName = "Ramin";
// age = 20;
// isMale = true;
// // array
// let names: string[] = [];
// names.push('Hamed');
// console.log(names);
// // union types
// let mixed: (number|string)[] = [];
// mixed.push(90, 'Ramin');
// console.log(mixed);
// let uid: number|string;
// uid = 5;
// uid = 'Ramin';
// // object
// let personOne: object;
// personOne = {name: 'Ramin', age: 20};
// let personTwo: {
//     name: string,
//     age: number,
//     isMale: boolean
// }
// personTwo = {
//     name: 'Ramin',
//     age: 20,
//     isMale: true
// }
// ******************************************************************
// dynamic types
// let age: any = 25;
// age = 50;
// age = 'Ramin';
// age = [1, 'Ramin'];
// console.log(age);
// let mixed:any[] = [];
// mixed.push(50);
// mixed.push('Ramin');
// console.log(mixed);
// ******************************************************************
// functions
// let greet: Function;
// greet = () => {
//     console.log('Hello');
// };
// greet();
// let sayHello = (firstName: string): void => {
//     console.log('hello', firstName);
// };
// sayHello('Ramin');
// let add = (a: number, b: number) => {
//     return a + b;
// };
// let result = add(12, 2);
// console.log(result);
// let sub = (a: number, b: number = 5, c?: number | string): number => {
//     console.log(c);
//     return a - b;
// };
// let result2: number;
// result2 = sub(20, 3, 5);
// console.log(result2);
// ******************************************************************
// type aliases
// type s = string;
// type n = number;
// type b = boolean;
// type sn = string | number;
// type snb = string | number |boolean;
// let mixed1: s | n |b;
// let mixed2: snb;
// let array: snb[] = [];
// array.push(20, true, 'Ramin');
// let user: {
//     firstname: s,
//     id: sn,
//     age: n
// };
// user = {
//     firstname: "Ramin",
//     id: 'ramin3434',
//     age: 20
// }
// let sayHi = (name: s, age: n, phone: sn): s => {
//     return `Hi, I'm ${name} and i have ${age} years old.`
// }
// console.log(sayHi('Ramin', 20, 3445));
// ******************************************************************
// function signitures
let greet;
greet = (name, msg) => {
    console.log(`${name} says ${msg}`);
};
greet('Ramin', 'Hello');
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
let person;
person = (user) => {
    console.log(`my name is ${user.name} and i have ${user.age} years old`);
};
person({ name: 'Ramin', age: 20 });
