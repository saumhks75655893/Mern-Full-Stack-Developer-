// addEventListener is to give other functionalities to the button and anything 

let eventButton = document.querySelector('#my-button'); 

let behaviour = () => console.log('httw.go');
eventButton.addEventListener('click',behaviour); 

let printDate = () => console.log(new Date);
eventButton.addEventListener('click',printDate);

eventButton.removeEventListener('click',behaviour);
