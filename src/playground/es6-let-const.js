var nameVar = "String";
nameVar = 'mike'
console.log("nameVar", nameVar);

let nameLet = 'Jan';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block Scoping
const fullName = 'Alistair Mackay'
let firstName = 'Alistair Mackay'

if (fullName) {
    firstName = fullName.split(' ');
    console.log(firstName);
}

console.log('firstName1', firstName);