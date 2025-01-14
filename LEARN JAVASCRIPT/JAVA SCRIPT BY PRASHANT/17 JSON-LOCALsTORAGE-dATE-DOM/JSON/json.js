let product = {
  "name" : 'Tshirt',
  "price" : 789, 
  "rating" : {
    "stars" : 345, 
    "noOfReviews": 454, 
  }, 
}

console.log(product);
console.log(typeof product);

// json to string
let str = JSON.stringify(product); 
console.log(str);
console.log(typeof str);

// string json 

let newObject = JSON.parse(str); 
console.log(newObject);
console.log(typeof newObject);



