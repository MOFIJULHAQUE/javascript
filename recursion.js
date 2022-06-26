// function a(num){
//     console.log("recursion "+num);
//     if (num < 10){
//         return a(num+1);
//     }

// }a(1);



function factorial(num,fact){
    if ( num > 0){
        fact = fact * num;
        return (factorial(num-1,fact));
    }else{
        return fact;
    }
}console.log(factorial(5,1)); return a