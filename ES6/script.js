// ES 6

// var gets hoisted - let does not
// console.log(message);
// var message = 'hello'

// var can get redeclared
// var message = 'hi';
// console.log(message);

// Scoping - where is a variable valid / usable
// var is function scoped
var message = 'hello from global scope';
function helloFromLocalScope() {
    var greeting = 'hello from the function'
    return greeting
}

// console.log(message);
// console.log(greeting);
// console.log(helloFromLocalScope());

// let is blocked scoped - block means curly brackets after if or loop

if (true) {
    let user = 'Kevin'
}
// console.log(user);

// Destructuring

// destructuring is an easy way of extracting data from objects

let person = {
    name: 'Ironhacker',
    age: 25,
    hobby: 'chess',
    address: {
        street: 'Lobeckstr.',
        city: 'Berlin'
    }
}
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

// bonus - you can destructure nested objects => address
// you can also alias with : => personName
let { name: personName, age, hobby, address: { city } } = person
// console.log(personName, age, hobby, city);

const user = {
    first: 'Michael',
    middle: 'Peter',
    last: 'Miller'
}
// write a function 'display' that receives the user object,
// destructures the keys and then returns a string with the names

function display(user) {
    const { first, last, middle } = user;
    return `${first} ${last} ${middle}`
}
// console.log(display(user))

// Array destructuring

const numbers = ["one", "two", "three", "four", "five"];

// const [first, second] = numbers
// if you want to skip an element you just add a comma
const [, , third] = numbers

// console.log(third);

// give b a default value of 2
// const [a, b = 2] = [1, 3];
// console.log(b);

const [a, b = 2, c, d = 1] = [3, 4]
// console.log(a, b, c, d);

// Spread operator
const ar = [1, 2, 3, 4];
// const [one, ...rest] = ar
// rest here is : [2, 3, 4]
// console.log(rest);
const reptiles = ['snake', 'lizard'];
const mammals = ['puppy', 'kitten'];
const animals = [...reptiles, ...mammals];
// console.log(animals);

// spread here gives you an array containing all the parameters
function sum(...numbers) {
    return numbers
}

// console.log(sum(2, 5, 7, 45, 12, 34))
// Objects

const car = {
    make: 'Volvo',
    year: 1995,
    engine: {
        fuel: 'petrol',
        hp: 80
    }
}

const { make, year } = car;
// console.log(make, year)

let { engine: { fuel, hp } } = car;
// console.log(fuel, hp);

const Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Extract the first two values
const [zero, one] = Numbers
// console.log(zero, one); // 0 1

// Extract all the values but the first one from the array
const [, ...greaterThan0] = Numbers
// console.log(greaterThan0); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const str = "Hello World!"

// Using the spread, return an array of all characters in `str` upperCased and reversed
const reversedUppercase = [...str.toUpperCase()].reverse()
// console.log(reversedUppercase); // [ '!', 'D', 'L', 'R', 'O', 'W', ' ', 'O', 'L', 'L', 'E', 'H' ]
// console.log('hello');

// Arrow Syntax

const nums = [1, 2, 3, 4, 5];

// const evens = nums.filter(function (number) {
//     return number % 2 === 0
// })
// remove 'function' - add '=>' instead
// if only one parameter remove the parentheses
// if no parameter -> () 
// if only a return statement remove {} and 'return'

const evens = nums.filter(number => number % 2 === 0)

// console.log(evens);

// function sumNums(a, b) {
//     return a + b
// }
// this as an arrow function

const sumNums = (a, b) => a + b


// console.log(sumNums(3, 6));
const names = ['kevin', 'anna', 'felix'];
// turn all names to uppercase using an arrow function as a callback
const upperCased = names.map(name => name.toUpperCase())
console.log(upperCased);