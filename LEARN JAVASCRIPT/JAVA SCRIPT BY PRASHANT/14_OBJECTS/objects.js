// let product = {
//   company : 'Mango',
//   price : 7867,
//   item : 'T-shirt'
// }

// // accessing by using .Notation; 
// console.log(typeof product);
// console.log(product);
// console.log(product.company);
// console.log(product.price);
// console.log(product.item);

// product.company = 'Guava';
// console.log(product.company);
// console.log(product);

// // accessing by using []bracket Notation;

// console.log(product['company']);
// console.log(product['price']);
// console.log(product['item']);


// // this is a use of bracket notation, if we do same with .notation then it will return undefined because .notation will search propertyName as the property of the product(object name). 
// let propertyName = 'item'; 
// console.log(product[propertyName]);


// // deletion

// delete product.company; 
// console.log(product);

// // addition

// product.company = 'Banana'; 
// console.log(product);


// // inside the object 

// let product = {
//   company : 'Mango',
//   price : 7867,
//   item : 'T-shirt',
//   rating : {
//     stars : 4.5,
//     noOfReviews:8.7,
//   },
//   displayPrice : function(){
//     return `The Price of the product is ₹${this.price}`;
//   }
// }


// console.log(product.displayPrice());

// // OBJECT REFERENCES

// // pass by value 
// let a = 5; 
// let b = a; 

// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

// a = 8; 
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

// // pass by reference

// let x = {num : 5};
// let y = x; 

// console.log('x = ',x.num); 
// console.log('y = ',y.num); 

// x.num = 8; 
// console.log('x = ',x.num); 
// console.log('y = ',y.num); 


// // OBJECT SHORTCUTS

// // 1. De-structuring
// let product = {
//   company : 'Mango',
//   price : 7867,
//   item : 'T-shirt',
  
// }

// // de-structuring
// // 1.
// let company1 = product.company; 
// console.log(company1); 
// // 2.
// let {company, price} = product; 
// console.log(company);
// console.log(price);

// // Shorthand Property
// let price = 871; 
// let product = {
//   company : 'Mango',
//   price : price,
// }; 
// // as same as 
// let prodcut1 ={
//   company : 'Mango',
//   price
// }; 
// Shorthand Method

let product = {
  company : 'Mango',
  price : 871,
  displayPrice: function(){
    return `₹${this.price.toFixed(2)}`; 
  }
}; 
// as same as upper 
let product1 = {
  company : 'Mango',
  price : price,
  displayPrice(){
    return `₹${this.price.toFixed(2)}`; 
  }
}; 

