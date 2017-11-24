// const square = function (x) {
//     return x * x;
// };

// // All arrow functions are anonymous.
// // const squareArrow = (x) => {
// //     return x * x;
// // };

// // if it's only returning one thing, then it's explicitly returned.
// const squareArrow = (x) => x * x;


// console.log(square(8));
// console.log(squareArrow(9));

// Challenge: Use Arrow functions
// getFirstName

const fullName = 'Alistair Mackay';

const getFirstName = (fullName) => fullName ? fullName.split(' ')[0] : "";

console.log('getFirstName', getFirstName(fullName));