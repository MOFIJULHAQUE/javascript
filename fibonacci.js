function fibonacci(a , b ,counter){
if(counter <= 10){
    console.log(a);
    let c = a + b;
    return fibonacci(b , c , counter +1);

}
}console.log(fibonacci(1,1,1));



