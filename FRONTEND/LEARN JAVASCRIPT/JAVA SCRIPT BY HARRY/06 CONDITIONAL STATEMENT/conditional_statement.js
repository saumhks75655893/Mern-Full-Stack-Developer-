// CONDITIONAL STATEMENT ( CONDITIONAL EXPRESSION )

let a = prompt(`hey what's your age : `); 
a = Number.parseInt(a); // converting string to a number 
// console.log(typeof a );
// console.log(a);

// if statement
if(a>0){
  alert('This a valid age !!'); 
}

// if - else statement 
if(a>0){
  alert("This is a valid age !!"); 
}
else{
  alert('This is an invalid age !!'); 
}

// if - else if - else statement 

if(a<0){
  alert("This is an invalid age !!"); 
}
else if(a<9 && a>0){
  alert('You are a kid , You cannot even think about driving!!'); 
}
else if(a<18 && a >= 9){
  alert('You are a kid, but You can now think about driving !!'); 
}
else{
  alert('You can drive !!'); 
}

console.log('Done');
