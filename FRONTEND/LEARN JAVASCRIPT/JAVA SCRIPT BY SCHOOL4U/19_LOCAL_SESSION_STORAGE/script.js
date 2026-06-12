// // // Local Storage

// // localStorage.setItem("Name", "Himanshu Kumar");
// // localStorage.setItem("Age", 28);
// // localStorage.setItem("Class", "MCA");

// // console.log(localStorage.getItem("Name"));
// // console.log(localStorage.getItem("Age"));
// // console.log(localStorage.getItem("Class"));

// // // Changing theme using local storage

// let bodyElement = document.querySelector("body");
// let allBtn = document.querySelectorAll("button");

// allBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     let color = btn.innerHTML.toLowerCase();
//     localStorage.setItem("colorTheme", color);
//     localStorage.setItem("Time", new Date().toLocaleTimeString());
//     localStorage.setItem("Date", new Date().toDateString());

//     setColorTheme();
//   });
// });

// function setColorTheme() {
//   let color = localStorage.getItem("colorTheme");
//   bodyElement.style.backgroundColor = color;
//   bodyElement.style.color = "blue";
// }

// // localStorage.removeItem("Time");
// // localStorage.removeItem("Date");
// // localStorage.clear();
// console.log(localStorage.key(0));
// console.log(localStorage.key(1));
// console.log(localStorage.key(2));

// //  // Storing Object in localStorage

// // let user = {
// //   name: "Himanshu Kumar",
// //   age: 23,
// // };

// // localStorage.setItem("Users", JSON.stringify(user));

// let data = JSON.parse(localStorage.getItem("Users"));
// console.log(data, typeof data);

// // //  // Storing Array in localStorage

// let arr = [1, 2, 3, 4];
// localStorage.setItem("Array", JSON.stringify(arr));
// let data = JSON.parse(localStorage.getItem("Array"));
// console.log(data);

// // //  // Storing Boolean Value in localStorage

// let bool = true;
// localStorage.setItem("Bool", JSON.stringify(bool));
// let data = JSON.parse(localStorage.getItem("Bool"));
// console.log(data);
