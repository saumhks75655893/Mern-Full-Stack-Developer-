// nested function 

function addSquares(a,b){

    sa = square(a); 
    sb = square(b); 

    function square(num){
        return num * num; 
    }

    return sa + sb; 
}

let a= 3; 
let b= 4; 
console.log("Add of squares of ",a ," and ",b," is : ",addSquares(a,b));
