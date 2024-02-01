// for(i = 1; i<20; i++){
//     if(i%2===1){
//         console.log(i);
//     }
// }


// for(i = 0; i<20; i+=2){
//     if(i%2!==1){
//         console.log(i);
//     }
// }

// for(i = 0; i<=30; i++){
//     if(i%5 ===0){
//         console.log(i);
//     }
// }


// for(i = 0; i<=30; i++){
//     if(i%5 ===0 ||i%3 ===0){
//         console.log(i);
//     }
// }


// for(i = 0; i<=30; i++){
//     if(i%5 ===0 && i%3 ===0){
//         console.log(i);
//     }
// }

//give me the sum of numbers from 1 to 20 that are visible by 3
// for (let i=1; i<=20; i++){
//     if(i%3 ===0){
//         console.log(i);
//     }
// }

let total = 0
for (let i=1; i<=20; i++){
    if(i%3 ===0){
        console.log(i);
        total = total+i;
        console.log(total)
    }
}

console.log( total)
