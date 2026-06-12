console.log("Metro Ticketing Discount Based on the Age and Gender !! ");

let age = 7; 
let gender = 'male';  // male or female
let finalDiscount; 

if(age <= 5){
  finalDiscount = 100; 
}
else if(gender === 'female'){
  finalDiscount = 50;
}
else if(age>5 && age <= 8){
  finalDiscount = 50; 
}
else if(age >= 65){
  finalDiscount = 30; 
}
else{
  finalDiscount = 0; 
}

console.log(`Your final discount is ${finalDiscount}`); 