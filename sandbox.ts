// ******************************************************************
// compile

// const firstName = "Ramin";
// console.log(firstName);

// const inputs = document.querySelectorAll('input');
// console.log(inputs);

// inputs.forEach(x => console.log(x));



// ******************************************************************
// types
const circ = function(diameter: number) {
    return diameter * Math.PI;
};

console.log(circ(2.5));



// ******************************************************************
// arrays
let names = ['Ramin', 'Shahram', 'Milad'];
names.push('Sina');
names[2] = 'Gorzin';

let numbers = [10, 20, 30, 40];

let mixed = [10, 20, 'Ramin', true];



// ******************************************************************
// objects
let persopn = {
    name: 'Ramin',
    age: 25,
    isMale: true
}

persopn = {
    name: 'Sina',
    age: 15,
    isMale: true
}

