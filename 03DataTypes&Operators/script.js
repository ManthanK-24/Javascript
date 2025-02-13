// DataTypes

// Numbers, Strings, Booleans, NULL, Undefined, Objects

// Numbers

let num = 3.14;
let num2 = 10;

console.log(num + num2);

// Strings

let firstName = 'Manthan12#4'; // Sinlge & Double Quotes both valid
const lastName = "Kulkarni";
console.log(firstName + ' ' + lastName);


// Booleans
let isLoggedIn = false;
console.log(isLoggedIn)

// NULL
let lastLoginDate = null;
// Space is used
console.log(lastLoginDate)

// Undefined
let secondLastLoginDate = undefined;
// Space is not used

// Objects 
const person = {
    firstName: 'Manthan',
    lastName: 'Kulkarni',
    age: 25,
    isLoggedIn: false,
    lastLoginDate: null,
}

console.log(person)


// JS -> 1 = true && 0 = false
// JS -> true | false

// true -> 1
// false -> 0

// string + string '1' + '1' -> string
// string * num -> num  // Eg '123'*1 = 123
// string + num -> string
// 'a'*1 -> NaN (NotANumber)

// Typeof operator
console.log(typeof ('123' * 1)); // number
console.log(typeof (lastLoginDate)) // null is a type of object thus object