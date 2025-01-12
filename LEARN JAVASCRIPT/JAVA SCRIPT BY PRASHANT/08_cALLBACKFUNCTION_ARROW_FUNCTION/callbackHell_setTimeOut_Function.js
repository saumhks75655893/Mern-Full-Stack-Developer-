// setTimeOut Function

// console.log("Hello This is world of AI.");

// // setTimeOut() with arrow function : -------
// setTimeout(() => {
//     console.log("It will run after some time");

// }, 3000);

// // setTimeOut() with anonymous function
// setTimeout(function (){
//     console.log("hello");

// }, 2000)

// console.log("Hello World");
// console.log("This is me.");

// CALLBACK HELL : ---------------

function getCheese(callback) {
  setTimeout(() => {
    const cheese = "cheese";
    console.log("Here is the cheese ", cheese);
    callback(cheese);
  }, 3000);
}

function makeDough(cheese, callback) {
  setTimeout(() => {
    const dough = cheese + "dough";
    console.log("Here is the dough ", dough);
    callback(dough);
  }, 3000);
}

function makePizza(dough, callback) {
  setTimeout(() => {
    const pizza = dough + "pizzaz";
    console.log("Here is the pizza ", pizza);
    callback(pizza);
  }, 3000);
} 
getCheese((cheese) => {
  makeDough(cheese, (dough) => {
    makePizza((dough), (pizza) => {
        setTimeout(() => {
            console.log("Got the pizza ",pizza);   
        },2000)
    })
  });
});
