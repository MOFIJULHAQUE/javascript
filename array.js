// let a =5;
// let b = 7;
// for(let i=1; i<5; i++){
//     let star = '';
//     for(let j =1; j<=i; j++){
//         star+= a+" ";
//         let c = a + b;
//         a=b;
//         b=c;
//     }
//     console.log(star);
// }

for(let i=1;i<=5;i++){
    let star=""
    for(let j=1;j<=5;j++){
        if(i<=j){

            star+=j+" ";
        }
    }
    for(let j=1;j<=5;j++){
        if(i>j){

            star+=j+" ";
        }
    }
    console.log(star);
}