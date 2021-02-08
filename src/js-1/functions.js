// 3 ways to define functions

// 1. function keyword + function name + param + + body
function sayHello(name) {
    console.log('hello from ' + name);
}

sayHello('Tom');
sayHello('Jerry');

// 2. anonymous function
func = function (fake) {
    console.log('hello from anonymous ' + fake);
}

func('Dog');

//TODO: arrow function