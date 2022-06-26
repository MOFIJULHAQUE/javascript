function factorial(num,fact){
    if(num>0){
        fact *=num; 
        return factorial(num-1,fact);
    }else{
        return fact;
    }
}console.log(factorial(5,1));