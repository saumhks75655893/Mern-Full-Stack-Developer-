// dom and element properties
let currentDate = new Date(); 

let dateWithTime = currentDate; 
console.log(dateWithTime); 

document.querySelector('.value1').innerText = dateWithTime; 
document.querySelector('.name1').value = dateWithTime; 

console.log(document.location);
console.log(document.title);
console.log(document.querySelector('button').href);
console.log(document.domain);
console.log(document.querySelector('button').classList);

// DOM AND ELEMENT METHODS

console.log(document.getElementById('div1')); 
console.log(document.querySelector('.name1'))
console.log(document.querySelector('.name1').value)
console.log(document.querySelector('button').classList.add('your-button')); 
console.log(document.querySelector('button').classList.remove('your-button')); 
let button = document.createElement('Button'); 
button.innerHTML = 'Click me'; 
let para = document.createElement('p'); 
para.innerHTML = 'Hi, I am Himanshu kumar!'; 
document.querySelector('#div1').appendChild(button); 
// document.querySelector('#div1').removeChild(button); 
document.querySelector('#div1').replaceChild(button,para); 


