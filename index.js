// natural  umbers
// let a = parseInt(process.argv[2]);

// for ( let i = 1; i<=a ; i++){
//     console.log(i);
// }


// even Number


// let a = parseInt(process.argv[2]);
// for ( i = 0 ; i <= a; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }





// reverse
// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);
// for(let i = b; i >= a ; i--){
//     console.log(i);
// }






// factorial
// let a = parseInt(process.argv[2]);
// let factorial = 1;

// for(let i = 1 ; i<=a ; i++){
//     factorial *=i;  
// }
// console.log(factorial);









// using while loop##################################









// natural numbers
// let a = parseInt(process.argv[2]);
// let i = 1;
// while(i <= a){
//     console.log(i);
//     i++
// }



// even numbers
// let a = parseInt(process.argv[2]);
// let i=0;
// while(i <= a){
//     if (i%2==0){
//         console.log(i);
//     }
//     i++
// }





// reverse
// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);







// factorial
let a = parseInt(process.argv[2]);
let i = 1;
let factorial = 1;
while(i <= a){
    factorial *= i;
    console.log(factorial);
}
i++