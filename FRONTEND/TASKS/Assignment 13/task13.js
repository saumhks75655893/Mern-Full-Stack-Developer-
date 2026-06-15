// find maximum in an array using function 

function maxNum(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max; 
    
}

const arr = [4,8,2,11,6,7,10]
console.log("Array is : ",arr);

let num = maxNum(arr); 
console.log("Max number in array is : ",num);

// Sum of all element of the array 

const sumOfElement = function(arr){
    let sum = 0; 
    for(i=0; i<arr.length; i++){
        sum += arr[i]; 
    }
    return sum; 
}

console.log("Sum of the elements is : ",sumOfElement(arr)); 

// Count the number of odd elements in the array 

const oddNumber = function(arr){
    let NumberOfOdds = 0; 
    for(i=0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            NumberOfOdds++; 
        }
    }
    return NumberOfOdds; 
}

console.log("Number of odd elements is : ",oddNumber(arr)); 

// 