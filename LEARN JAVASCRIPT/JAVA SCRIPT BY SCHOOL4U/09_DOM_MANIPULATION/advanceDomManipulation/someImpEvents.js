let div = document.querySelector(".alpha");
let secondButton = document.querySelector(".secondButton");
let form = document.querySelector("form");
let inputValue = document.querySelector(".inputValue");
let submitValue = document.querySelector(".submit");
let resetValue = document.querySelector(".reset");
let h1 = document.querySelector("h1");

// // *****************************************************************************************
// // // // MOUSE EVENTS
// // *****************************************************************************************

// secondButton.addEventListener("click", () => {
//   console.log("clicked");
// });

// secondButton.addEventListener("dblclick", () => {
//   console.log("double clicked");
// });

// secondButton.addEventListener("mouseup", () => {
//   console.log("Mouse Up");
// });

// secondButton.addEventListener("mousedown", () => {
//   console.log("Mouse Down");
// });

// div.addEventListener("mouseenter", () => {
//   console.log("MOUSE ENTER");
// });

// div.addEventListener("mouseleave", () => {
//   console.log("MOUSE LEAVE");
// });

// div.addEventListener("mouseover", () => {
//   console.log("MOUSE OVER");
// });

// div.addEventListener("mouseout", () => {
//   console.log("MOUSE OUT");
// });

// div.addEventListener("mousemove", () => {
//   console.log("MOUSE MOVE");
// });

// div.addEventListener("contextmenu", () => {
//   console.log("CONTEXT MENU");
// });

// div.addEventListener("auxclick", () => {
//   console.log("AUX CLICK");
// });

// // *****************************************************************************************
// // // // KEYBOARD EVENTS
// // *****************************************************************************************

// secondButton.addEventListener("keypress", () => {
//   console.log("KEY PRESS");
// });

// secondButton.addEventListener("keydown", () => {
//   console.log("KEY DOWN ");
// });

// secondButton.addEventListener("keyup", () => {
//   console.log("KEY UP");
// });

// // *****************************************************************************************
// // // // FORM EVENTS
// // *****************************************************************************************

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("FORM SUBMITTED...!");
// });

// form.addEventListener("reset", (e) => {
//   e.preventDefault();
//   console.log("Form reset...!");
// });

// inputValue.addEventListener("focus", () => {
//   console.log("Input is now focused you can enter your detail now...!");
// });

// inputValue.addEventListener("blur", () => {
//   console.log("Input is now blur you cannot enter your detail right now...!");
// });

// inputValue.addEventListener("input", () => {
//   console.log(inputValue.value);
// });

// inputValue.addEventListener("change", () => {
//   console.log(inputValue.value);
// });

// // *****************************************************************************************
// // // // TOUCH EVENTS
// // *****************************************************************************************

// div.addEventListener("touchstart", () => {
//   console.log("Finger touch the screen");
// });

// div.addEventListener("touchmove", () => {
//   console.log("Finger move on the screen");
// });

// div.addEventListener("touchend", () => {
//   console.log("Finger is remove from the screen");
// });

// div.addEventListener("touchcancel", () => {
//   console.log("Finger touch interrupted");
// });

// // *****************************************************************************************
// // // // WINDOW EVENTS
// // *****************************************************************************************

// window.addEventListener("scroll", () => {
//   console.log("Scrolling the window");
// });

// window.addEventListener("resize", () => {
//   console.log("resizign the window");
// });

// window.addEventListener("load", () => {
//   console.log("page and resources fully loaded");
// });

// window.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM is fully loaded without waiting for styles or images");
// });

// // *****************************************************************************************
// // // // CLIPBOARD EVENTS
// // *****************************************************************************************

// h1.addEventListener("copy", () => {
//   console.log("Copied string :", window.getSelection().toString());
// });

// h1.addEventListener("cut", () => {
//   console.log("Cut string :", window.getSelection().toString());
// });

// inputValue.addEventListener("paste", (e) => {
//   e.preventDefault();
//   const pastedText = e.clipboardData.getData("text");
//   inputValue.value = pastedText;
//   console.log("Pasted text:", pastedText);
// });
