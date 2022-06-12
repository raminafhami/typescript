// ******************************************************************
// compile
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Invoice } from "./classess/Invoice.js";
import { Payment } from "./classess/Payment.js";
import { ListTemplate } from "./classess/ListTemplate.js";
const type = document.getElementById('type');
const tofrom = document.getElementById('tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'صورتحساب') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    ;
    list.render(doc, type.value, 'end');
});
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
function deco(target) {
    console.log(1);
    target.prototype.id = 100;
}
;
function OtherDecorator(name) {
    console.log(2);
    return (target) => {
        console.log(3);
        target.prototype.name = name;
    };
}
let ClassDecoratorExample = class ClassDecoratorExample {
    constructor(age) {
        this.age = age;
        console.log(4);
    }
};
ClassDecoratorExample = __decorate([
    deco,
    OtherDecorator('Ramin'),
    __metadata("design:paramtypes", [Number])
], ClassDecoratorExample);
// const x = new ClassDecoratorExample(20);
// console.log(x);
