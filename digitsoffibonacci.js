function fibonacci(a, b, counter) {
    if (counter < 10) {
        
        let c = a + b;

        return fibonacci(b, c, counter + 1);

    }
    console.log(a)
}
fibonacci(1, 1, 1);