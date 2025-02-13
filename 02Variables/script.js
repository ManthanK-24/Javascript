// Variables
// var, let & const

// DataType varName = value; In Strongly Typed Lang
// JS -> Loosely Typed Lang (Dynamically Data Type Gets Assigned)

// JS Interpreter decides datatype at runtime
var age = 22;

age = "Manthan";

console.log(age);

// Conventions to follow
// Name of variable must start with alphabet only
// UnderScore can be used, not hypen
// camelCase convention is also good practice to name variables
// FirstLetterCapital is used for Classes

// var -> Scope = Global

console.log(age1);

if (true) {
    var age1 = 20;
}

console.log(age1);

// let -> Scope = Local

// if (true) {
//     let a = 10;
//     a = "Manthan";
//     console.log(a);
// }
// console.log(a);

// If we have choice to select Variable as var or let
// Prefer let to avoid giving global access

// const -> Scope = Local
// values cannot get re-assigned


if (true) {
    const b = 20;
    console.log(b + 10);
}
console.log(b + 10);