// Given a number n, print all the odd numbers from 1 to n using recursion.
function oddNumber(a,b){
    while(a<=b){
        if(a%2!=0){
            console.log(a);
        }
        return oddNumber(a+1,b);
    }


}
console.log(oddNumber(10,20));




// function printNumbers(a,b){
//     while(a<=b){
//         if(a%2!=0){
//             console.log(a);
            
//         }return printNumbers(a+1,b);
//     }
// }
// console.log(printNumbers(3,20));