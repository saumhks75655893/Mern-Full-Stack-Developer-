// Array callback functions 
const a = [4,1,6,2,-5, 3,2,-8,6,7]; 

// 1. find()

const firNeg = (n) => {
    return n<0; 
}
const result = a.find(firNeg); 
console.log("The value :",result);

//  2. findIndex() 

const result1 = a.findIndex(firNeg);
console.log("The index of the value :",result1);

// 3. forEach() 

a.forEach((num, i) => {
    console.log("Array element: ",num," and It's index: ",i);
    
})