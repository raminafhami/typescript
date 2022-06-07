// ******************************************************************
// compile
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
const addUid = (obj) => {
    return Object.assign(Object.assign({}, obj), { uid: Math.floor(Math.random() * 100) });
};
let doc1 = addUid({ a: 1 });
console.log(doc1.a);
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["AUTH"] = 0] = "AUTH";
    ResourceType[ResourceType["PERSON"] = 1] = "PERSON";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["BOOK"] = 3] = "BOOK";
})(ResourceType || (ResourceType = {}));
;
let doc2 = {
    uid: 1,
    resoursceName: ResourceType.PERSON,
    data: 'Ramin'
};
console.log(doc2);
let doc3 = {
    uid: 2,
    resoursceName: ResourceType.BOOK,
    data: 'Roaman'
};
console.log(doc3);
