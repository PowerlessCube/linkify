// //argumentsj object - no longer bound with arrow functions

// const add = (a, b) => {
//     // console.log(arguments);
//     return a + b;
// }

// console.log(add(55, 1, 1001));

// //this keyword - no longer bound

// const user = {
//     name: 'Alistair',
//     cities: ['Aberdeen', 'Ellon', 'Aberdeen'],
//     // don't user arrow functions for methods user es6 method call
//     printPlacesLived() {
//         return this.cities.map((city) => this.name + ' has lived in ' + city);
//     }
// };
// console.log(user.cities);
// console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // array of numbers
    numbers: [2, 4, 6],
    // multiply by - single number
    multiplyBy: 2,
    // multiply method = return a new array where the numbers have been multiplied (use map);
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());