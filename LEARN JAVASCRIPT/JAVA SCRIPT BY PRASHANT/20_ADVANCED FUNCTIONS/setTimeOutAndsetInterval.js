// setTimeOut used to delay  - it's return a timer id 

let timerId = setTimeout(()=>{console.log('Subah ho gayi, uath jao !!');},2000);
console.log('Alarm set!!');
console.log(`timer id ${timerId}`);

clearTimeout(timerId);

// setInterval  used to do work after each time interval 

let alarm = () => {
  console.log(`Wake up , ${new Date()}`)
}
let timerId2 = setInterval(alarm, 1000);

setTimeout(() => clearInterval(timerId2), 5000);
setTimeout(() => {
  console.log('Exit!!!');
  
}, 6000);

