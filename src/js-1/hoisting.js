// Hoisting
// def: declaration of functions and (only) var
// are moved to the top of scope before code execution

// // e.x.1
// testHoisting();
//
// function testHoisting () {
//     console.log("function has been hoisted");
//
//     console.log(a);
//     // only var declaration are moved up, not assignment
//     var a = 10;
// }

// // e.x.2 4752
// //
// fn();
//
// var fn = function () {
//     console.log(1);
// }
//
// function fn() {
//     console.log(2);
// }
//
// fn();

// // e.x.3
// // discuss: for hoisting declaration (func prior var)
// function funcPriorVar() {
//     console.log(a); // both func & var declarations hoist, but func > var, so log func
//
//     var a = 1;
//
//     console.log(a); // a from func to 1
//
//     function a() {
//         console.log('a is a function now')
//     }
//
//     var b = function() {
//         console.log('++++');
//     }
//     console.log(b); // log the whole func
// }
//
// funcPriorVar();

// // e.x.4 1535  GEC (global execution context), ECS (stack)
// function f1() {
//     console.log("f1");
//     f2();
// }
// function f2() {
//     console.log("f2");
//     f3();
// }function f3() {
//     console.log("f3");
//     f4();
// }function f4() {
//     console.log("f4");
// }
//
// f1();

// e.x. 2412
console.log(a1); // undefined
console.log(b1); // undefined
console.log(f1); // func body

// func/var declaration
var a1 = 19;
var a2 = 20;
var a3 = "hello";
var b1 = {name: "John Doe"};

var res = f1(a1, a2); //39

console.log(res);

function f1(a, b) {
    var t = 0;
    var m = 10;
    console.log(a); // 19
    console.log(b); // 20

    function f2() {
        console.log("this is f2");
    }

    f2();
    return a + b;
}




















