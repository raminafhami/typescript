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
let greet;
greet = () => {
    console.log('Hello');
};
greet();
let sayHello = (firstName) => {
    console.log('hello', firstName);
};
sayHello('Ramin');
let add = (a, b) => {
    return a + b;
};
let result = add(12, 2);
console.log(result);
let sub = (a, b = 5, c) => {
    console.log(c);
    return a - b;
};
let result2;
result2 = sub(20, 3, 5);
console.log(result2);
