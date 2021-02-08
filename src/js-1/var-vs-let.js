
// a is var, can be declared many times,
// and can be a problem bc ppl may declare existing variables
var a = "first declared";
var a = "declared again";
console.log(a);


// let
// Uncaught SyntaxError: Identifier 'a' has already been declared
// uncomment below and run to see
// let b = "first declared";
// let b = "declared again";
// console.log(a);

// const
// Uncaught SyntaxError: Identifier 'c' has already been declared
// const c = "first declared";
// const c = "declared again";
// console.log(c);