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
// let i = 0;
// do {
//   i++;
//   if (i === 5) continue;
//   console.log("Step ", i);
// } while (i <= 10);

// --------------------------------------------------------------------------------
// LOOPS INFORMATION BY PRASHANT

// 1. while loop

// let num =1

// while(num <= 10){
//   console.log(num);
//   num++;

// }
// console.log("Final value of num : " + num);

// // non - standard conditions
// let x = 0;
// while(x<1){
//   console.log(x);
//   x = Math.random() * 2;
// }
// console.log("Final value of num : " + x);

// 2. do while loop

// let n = 0;

// do{
//   console.log(n);
//   n++;
// }while(false);

// 3. for loop

// for(let i=0; i<=10; i++){
//   console.log('step '+i);

// }

// let arr = [109,"Hello",789,1,1.345,-11,'student',null];

// for(let i=0; i<arr.length; i++){
//   console.log(`Element ${i}  =  ${arr[i]}`);
// }

// ACCUMULATOR PATTERN

// let a = [1,2,3,4,5,6];
// // sum of the elements
// let sum = 0;
// for(let i=0; i<a.length; i++){
//   sum += a[i];
// }

// console.log(`Sum of the element is : ${sum}`);

// // square of the elements
// let squares = [];
// for(let i=0; i<a.length; i++){
//    squares.push(a[i] * a[i]);
// }

// // normal array
// console.log(a);
// // squared element array
// console.log(squares);

// BREAK STATEMENT

// for(let i=0; i<=40; i++){
//   if(i === 24){
//     break;
//   }
//   console.log(i);
// }

// let arr = [1, 2, 45, 20, 12, 18,8, 17, 80, 1345, 134, 1, 24358];
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 8) {
//     console.log(`8 is found at the index ${i}.`);
//     break;
//   }
//   console.log(' Still looking!!');
// }

// CONTINUE STATEMENT 

for(let i=0; i<=25 ; i++){
  if(i%2 == 0){
    continue; 
  }

  console.log(i);
  
}