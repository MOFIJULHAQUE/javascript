
function printNumbers(a,b){
    while(a<=b){
        if(a%2==0){
            console.log(a);
            
        }return printNumbers(a+1,b);
    }
}
console.log(printNumbers(3,20));