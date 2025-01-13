let product = {
  company : 'Mango',
  price : 7867,
  item : 'T-shirt'
}

// accessing by using .Notation; 
console.log(typeof product);
console.log(product);
console.log(product.company);
console.log(product.price);
console.log(product.item);

product.company = 'Guava';
console.log(product.company);
console.log(product);

// accessing by using []bracket Notation;

console.log(product['company']);
console.log(product['price']);
console.log(product['item']);


// this is a use of bracket notation, if we do same with .notation then it will return undefined because .notation will search propertyName as the property of the product(object name). 
let propertyName = 'item'; 
console.log(product[propertyName]);


// deletion

delete product.company; 
console.log(product);

// addition

product.company = 'Banana'; 
console.log(product);

