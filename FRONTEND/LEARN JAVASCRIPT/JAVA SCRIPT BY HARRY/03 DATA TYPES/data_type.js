console.log('DATA TYPE');

/*
Primitive data type : TYPE OF DATA TYPES : -- 

N - NULL
N - NUMBER
S - STRING
S - SYMBOL
B - BOOLEAN
B - BIGINT
U - UNDEFINED

*/

let a = null; 
let b = 145; 
let c = 'man'; 
let d = true; 
let e = BigInt('34534'); 
let f = undefined
let g = Symbol('I am a nice symbol.');

console.log('a is '+a);
console.log('b is '+b);
console.log('c is '+c);
console.log('d is '+d);
console.log('e is '+e);
console.log('f is '+f);
console.log(g);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

// Non - primitive data type - Object 

const obj = {
  'name':'Himanshu kumar', 
  'class': 'bca', 
  'subject': 'web dev', 
  'Enroll' : 2201151015,
}

console.log(obj);
console.log(typeof obj);

