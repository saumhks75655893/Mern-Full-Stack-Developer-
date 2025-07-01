// // // Q1 -> Create a paragraph with text "mai tumse pyar nahi karta hu" and add background color to black and font color to green using javascript;

// let para = document.createElement("p");
// para.innerHTML = "Mai tumse pyar nahi karta hu";
// para.style.backgroundColor = "black";
// para.style.color = "green";
// para.style.width = "90%";
// para.style.display = "flex";
// para.style.flexDirection = "column";
// para.style.alignItems = "center";
// para.style.justifyContent = "center";
// para.style.columnGap = "20px";
// // para.style.textAlign = "center";
// para.style.fontSize = "40px";
// para.style.padding = "20px";
// let body = document.querySelector("body");
// body.append(para);

// // Q2 -> Insert a button with text 'click-me' as the first element inside the paragraph created in first question.

// let button = document.createElement("button");
// button.innerHTML = "Click Me";
// button.style.width = "50%";
// button.style.padding = "10px 20px";
// button.style.backgroundColor = "teal";
// button.style.border = "none";
// button.style.borderRadius = "10px";
// button.style.color = "white";
// button.style.fontSize = "20px";
// button.style.fontWeight = "bold";
// para.prepend(button);

// console.log(para.children);

// Q3 -> Create a <div> tag in html and give it a class & some styling. Now create a new class in css and try to append this class to the <div> element.

let alpha = document.querySelector(".alpha");
console.log(alpha);
alpha.innerHTML = "SPHERE";

console.log(alpha.classList);

let oldAttr = alpha.getAttribute("class");
// alpha.classList.add("bita");
alpha.setAttribute("class", `${oldAttr} bita`);

console.log(alpha.classList);
