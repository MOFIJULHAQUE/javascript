// Print ‘n’ numbers of Fibonacci series using recursion.
function fibonacci(a, b, counter, n) {
    if (counter <= n) {
    console.log(a);
    let c = a + b;
    return fibonacci(b, c, counter + 1, n);
    }
}
console.log(fibonacci(1, 1, 1, 22));
