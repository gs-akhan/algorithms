function fib(n) {
    if(n <= 2) return n;
    return fib(n -1) + fib(n - 2);
}
// How can u ooptimize this for larger number.


function fib2(n) {
    var result = [0,1];
    for(let i = 2; i < n; i++) {
        result.push(result[0] + result[1]);
        result.shift();
    };

    return result[0] + result[1];
}

console.log(fib2(12));


