// Local Storage basic example

localStorage.setItem('Name', 'Himanshu kumar'); 
localStorage.setItem('Age', 21); 

console.log(localStorage.getItem('Name')); 
console.log(localStorage.getItem('Age')); 

// localStorage.clear()


// Storing object in the localStorage

let product = {
  "name" : 'Tshirt',
  "price" : 789, 
  "rating" : {
    "stars" : 345, 
    "noOfReviews": 454, 
  }, 
}; 

localStorage.setItem('product', JSON.stringify(product));

let product1 = JSON.parse(localStorage.getItem('product')); 
console.log(product1);


localStorage.clear()

localStorage.removeItem('Age'); 
localStorage.removeItem('Name'); 