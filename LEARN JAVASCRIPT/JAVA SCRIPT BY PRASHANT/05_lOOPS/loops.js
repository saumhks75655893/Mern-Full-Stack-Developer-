// For loop
// for(let i=1; i<=10; i++){
//     console.log(i);

// }

// While loop
// let i=1;
// while(i<=10){
//     console.log("Step ",i);
//     i++;

// }

// Do.. While LOOP : -------
// let i=0;
// do{
//     console.log("Step ",i);
//     i++;
// }while(i>=10)  // this is a false condition

// Break and Continue
//break
// let i=0;
// do{
//     console.log("Step ",i);
//     i++;
//     if(i=== 5)
//         break;
// }while(i<=10)

// continue
let i = 0;
do {
  i++;
  if (i === 5) continue;
  console.log("Step ", i);
} while (i <= 10);
