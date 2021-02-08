var a = 10; // global scope: can be used anywhere
console.log('a' in window);

function f1 () {
    var t1 = 20; // scope is inside f1 (including func inside f1 e.x f2()
    console.log('a -' +a);

    function f2() {
        var t2 = 30;
        console.log('t1 - ' + t1);
        return t1 * t1;
    }
    return f2();
}

var m = f1();

console.log('m - ' + m);