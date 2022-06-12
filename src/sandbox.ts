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
// let greet: (a: string, b: string) => void;
// greet = (name: string , msg: string) => {
//     console.log(`${name} says ${msg}`);
// };
// greet('Ramin', 'Hello');

// let calc: (a: number, b: number, c: string) => number;
// calc = (num1: number, num2: number, action: string) => {
//     if (action === 'add') {
//         return num1 + num2;
//     } else {
//         return num1 - num2
//     }
// };

// type objType = {name: string, age: number};
// let person: (obj: objType) => void;
// person = (user: objType) => {
//     console.log(`my name is ${user.name} and i have ${user.age} years old` );
// };
// person({name: 'Ramin', age: 20});




// ******************************************************************
// DOM and type casting
// const ancher = document.querySelector('a')!;
// console.log(ancher.href);

// const form = document.querySelector('form')!;
// console.log(form.children);

// const form1 = document.querySelector('.new-item-form') as HTMLFormElement;

// // inputs
// const type = document.getElementById('type') as HTMLSelectElement;
// const tofrom = document.getElementById('tofrom') as HTMLInputElement;
// const details = document.getElementById('details') as HTMLInputElement;
// const amount = document.getElementById('amount') as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();
//     console.log(type.value);
//     console.log(tofrom.value);
//     console.log(details.value);
//     console.log(amount.valueAsNumber);
// })



// ******************************************************************
// class and access modifier
// class Invoice {
//     public client: string;
//     private details: string;
//     readonly amount: number;

//     constructor(c: string, d: string, a: number) {
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }

//     format() {
//         return `${this.client} owes ${this.amount} for ${this.details}`
//     }
// };

// class Invoice {
//     constructor(
//         public client: string,
//         private details: string,
//         readonly amount: number
//     ) {};
//     format() {
//         return `${this.client} owes ${this.amount} for ${this.details}`
//     }
// };

// const invOne = new Invoice('Ramin', 'web', 20);
// const invTwo = new Invoice('Reza', 'web', 40);

// console.log(invOne);
// console.log(invTwo);
// console.log(invOne.format());
// console.log(invTwo.format());

// let invoices: Invoice[] = [];
// invoices.push(invOne, invTwo)
// console.log(invoices);

// for (const inv of invoices) {
//     console.log(inv.client);
//     // console.log(inv.details);
//     console.log(inv.amount);
//     console.log(inv.format());
    
// }



// ******************************************************************
// modules
// import { Invoice } from './classess/Invoice.js';

// const invOne = new Invoice('Ramin', 'web', 20);
// const invTwo = new Invoice('Reza', 'web', 40);

// console.log(invOne);
// console.log(invTwo);
// console.log(invOne.format());
// console.log(invTwo.format());

// let invoices: Invoice[] = [];
// invoices.push(invOne, invTwo)
// console.log(invoices);

// for (const inv of invoices) {
//     console.log(inv.client);
//     // console.log(inv.details);
//     console.log(inv.amount);
//     console.log(inv.format());
    
// }



// ******************************************************************
// interfaces
// interface person {
//     name: string,
//     age: number,
//     speak(a: string): void
// };

// const person1: person = {
//     name: "Ramin",
//     age: 20,
//     speak(text: string): void {
//         console.log(text);
//     }
// };

// const greetPerson = (user: person) => {
//     console.log("hello " + user.name);
// };

// greetPerson(person1);



// // ******************************************************************
// // interface with class
// import { Invoice } from './classess/Invoice.js';
// import { Payment } from './classess/Payment.js';
// import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('Ramin', 'web', 20);
// docTwo = new Payment('Reza', 'web', 40);

// let docs: HasFormatter[] = [];
// docs.push(docOne, docTwo);
// console.log(docs);



// // ******************************************************************
// finall app
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { Invoice } from "./classess/Invoice.js";
import { Payment } from "./classess/Payment.js";
import { ListTemplate } from "./classess/ListTemplate.js";

const type = document.getElementById('type') as HTMLSelectElement;
const tofrom = document.getElementById('tofrom') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

const form = document.querySelector('form')!;
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'صورتحساب') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    };
    list.render(doc, type.value, 'end');
})




// // ******************************************************************
// // generic and enums
// const addUid = <T extends object>(obj: T) => {
//     return {...obj, uid: Math.floor(Math.random() * 100)};
// };
// let doc1 = addUid({a: 1});
// console.log(doc1.a);


// enum ResourceType{AUTH, PERSON, FILM, BOOK}

// interface Resource <T> {
//     uid: number,
//     resoursceName: number,
//     data: T
// };
// let doc2: Resource <string> = {
//     uid: 1,
//     resoursceName: ResourceType.PERSON,
//     data: 'Ramin'
// } ;
// console.log(doc2);
// let doc3: Resource <string> = {
//     uid: 2,
//     resoursceName: ResourceType.BOOK,
//     data: 'Roaman'
// } ;
// console.log(doc3);



// // ******************************************************************
// // tuples
// let tup: [string, number, boolean] = ['Ramin', 12, true];
// console.log(tup);



// ******************************************************************
// decorators
function deco(target: Function) {
    console.log(1);
    target.prototype.id = 100;
};

function OtherDecorator(name: string) {
    console.log(2);
    
    return (target: Function) => {
        console.log(3);
        
        target.prototype.name = name;
    }
}

@deco
@OtherDecorator('Ramin')
class ClassDecoratorExample {
    age: number;
    constructor(age: number) {
        this.age = age;
        console.log(4);
        
    }
 }


// const x = new ClassDecoratorExample(20);
// console.log(x);


