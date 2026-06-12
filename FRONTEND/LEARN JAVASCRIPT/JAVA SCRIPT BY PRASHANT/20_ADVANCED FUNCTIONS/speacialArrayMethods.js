// Array methods

console.log('--------------- Array Methods --------------');

let arr = [1,2,3,4,5,6];

let odds = arr.filter((num,index) => {
  if(num%2 === 1){
    return true; 
  }else{
    return false; 
  }
}); 

console.log(odds);

// shorter way 

let newOdds = arr.filter((num,index)=>{ return (num%2 ===1); }); 
console.log(newOdds);

// new shorter way
let againNewOdds = arr.filter((num, index) => num%2 === 1);
console.log(againNewOdds);


// map function

let numbers = [1,2,3,4,5]; 
let squares = numbers.map((num) => num * num); 
console.log(squares);









