// // e.x. 0140  warmup
// function add() {
//     var n = 2;
//
//     var sol = function () {
//         console.log(n);
//     }
//
//     return sol;
// }
//
// var res = add();
// console.log(res);  // func body
// res(); //2


// def: an inner func always has access to the var and param of its outer func, even if it has returned

// // e.x. 1330
// function test() {
//     var n = 10;
//     function add() {
//         n++;
//         console.log(n);
//     }
//     function reduce() {
//         n--;
//         console.log(n);
//     }
//     return [add, reduce];
// }
//
// var res = test(); // func body
// console.log(res);
// res[0]();
// res[0]();
// res[1]();
// res[1]();


// function test1() {
//     var a = 1;
//
//     function test2() {
//         var b = 2;
//         console.log(a);
//     }
//
//     return test2;
// }
//
// var c = 3;
// var test3 = test1();
// console.log(test3);  // test2 body
// test3();

// // e.x. G practice 5220
// function practice1() {
//     var arr = [];
//
//     for(var i = 0; i < 4; i++) {
//         arr[i] = function() {
//             console.log(i);
//         };
//     }
//     return arr;
// }
//
// console.log(practice1());
// var sol = practice1(); // arr of funcs
//
// for (var j = 0; j < 4; j++) {
//     sol[j]();
// }

// fix  IIFE
// (function() {...})()
// (function() {...}())
function practice2() {
    var arr = [];

    for(var i = 0; i < 4; i++) {
        (function (j) {
            console.log(j);
            arr[j] = function () {
                console.log(j);
            }
        })(i);  // j take whatever current i is and execute immediately
        // inner anonymous function and j are closure now
    }
    return arr;
}

console.log(practice2());
var sol = practice2(); // arr of funcs

for (var j = 0; j < 4; j++) {
    sol[j]();
}
























