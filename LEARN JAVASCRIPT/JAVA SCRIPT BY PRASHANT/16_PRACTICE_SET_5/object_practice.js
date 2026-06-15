// // Q1
// let product = {
//   pName : 'T-shirt',
//   pPrice : 4500,
//   pSize : ['L', 'XXL', 'S', 'M'],
//   'delivery-time' : '12/03/2025',
// };

// console.log(product);

// // Q2
// let obj1 = {name:'hello'};
// let obj2 = obj1;

// console.log(obj1.name);
// console.log(obj2.name);

// obj2.name = 'Himanshu kumar';
// console.log(obj1.name);
// console.log(obj2.name);

// // Q3

// console.log(product['delivery-time']);

// // Q4

// let jobAppre = {
//   message:'good job',
//   status: 'complete',
// }

// let {message, status} = jobAppre;

// console.log(message);
// console.log(status);

// // Q5

let product = {
  pName: "T-shirt",
  pPrice: 4500,
  pSize: "S",
  deliveryTime: "12/03/2025",
};

function isIdenticalProduct(product1, product2) {
  if (typeof product1 !== 'object' || typeof product2 !== 'object') {
    console.warn("Parameters passed was not an object!");
    return false;
  }

  if (product1 == product2) {
    return true;
  }

  if (
    product1.pName == product2.pName &&
    product1.pPrice == product2.pPrice &&
    product1.pSize == product2.pSize
  ) {
    return true;
  }
  else{
    return false; 
  }

}

let product2 = {
  pName: "T-shirt",
  pPrice: 4500,
  pSize: "M",
  deliveryTime: "12/03/2025",
};

let product3 = {
  pName: "T-shirt",
  pPrice: 4500,
  pSize: "S",
  deliveryTime: "12/03/2025",
};

console.log(isIdenticalProduct(product, ' '));
console.log(isIdenticalProduct(product, product));
console.log(isIdenticalProduct(product, product2));
console.log(isIdenticalProduct(product3, product2));
console.log(isIdenticalProduct(product3, product));
console.log(isIdenticalProduct(product, product3));

