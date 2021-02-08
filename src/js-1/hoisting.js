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

// // e.x.2
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

// e.x.3
// discuss: for hoisting declaration (func prior var)
function funcPriorVar() {
    console.log(a); // both func & var declarations hoist, but func > var, so log func

    var a = 1;

    console.log(a); // a from func to 1

    function a() {
        console.log('a is a function now')
    }

    var b = function() {
        console.log('++++');
    }
    console.log(b); // log func
}

funcPriorVar();