// . - dot
// () - parenthesis, parens
// [] - brackets, square braces
// {} - braces, curly braces, code block, curly bracks, curly bois
// < - less than
// > - greater than
// / - slash, whack, forward slash
// \ - back slash
// ! - bang, not
// # - hash, pound
// * - splat, star
// | - pipe
// || - or, pipes
// $ - dollar sign, bling, cash
// NaN - Not a number, bread

// TYPES:
// Boolean, String, Number
// Object, Array
// Undefined, null

let valueName = 5; // expression
const anotherValue = 5;
const someArray = [1];
someArray.push(2);
// someArray = [1,2]; // BAD!


const someObject = {firstName: 'Scott'};
someObject.lastName = 'Bromander';
// someObject = {}; // BAD!

let x = 5;
// == - check value
// === - check value and type

if (x == '6') {
  console.log(true);
} else {
  console.log(false);
}

let i;
for (i = 0; i < 10; i++) {
  // console.log(i);
}
console.log(i);

while(i > 0) {
  console.log('meow');
  i--;
}

// for(let item in stuff) {
//
// }
//
// for(let item of stuff) {
//
// }

// function declaration
function doubleIt(x) {
  return x * 2;
}

// Function expression
const tripleIt = function(x) {
  return x * 3;
}

function sayTrue() {
  return true;
}

console.log(sayTrue());

let someMoneyValue = '42000.01';

console.log(parseFloat(someMoneyValue));

const ourClass = ['Scott', 'Myron'];
ourClass.push('Rachael');
// shift
// pop
// unshift

// .functionName()
// functionName()

let someNumber = 10;
someNumber = someNumber.toString();
someNumber += 5;
console.log('Scott' + 'Bromander');
console.log(toString(10) + 10);
console.log('10' - 5);
console.log('10' * 5);
console.log('10' / 5);

let arrayOfNumbers = 1001;
arrayOfNumbers = arrayOfNumbers.toString();
console.log(arrayOfNumbers.charAt(1));
