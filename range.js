function printNumbers(a,b){
    while(a<=b){
        console.log(a);
        return printNumbers(a+1,b);
    }
}
console.log(printNumbers(2,10));