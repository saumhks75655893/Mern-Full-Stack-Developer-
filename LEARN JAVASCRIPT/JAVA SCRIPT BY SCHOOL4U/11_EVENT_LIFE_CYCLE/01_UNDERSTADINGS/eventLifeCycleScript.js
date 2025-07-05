let grandParent = document.querySelector(".grandParent");
let Parent = document.querySelector(".Parent");
let child = document.querySelector(".child");

// // // EVENT PROPAGATION

// // CAPTURING PHASE (TRICKLING PHASE), TARGET PHASE, AND BUBBLING PHASE

// grandParent.addEventListener(
//   "click",
//   () => {
//     alert("GRAND PARENT BOX CLICKED");
//   },
//   true
// ); // capturing phase

// grandParent.addEventListener("click", () => {
//   alert("GRAND PARENT BOX CLICKED");
// }); // bubbling phase

// child.addEventListener(
//   "click",
//   () => {
//     alert("CHILD BOX CLICKED");
//   },
//   true
// ); // capturing phase

// child.addEventListener("click", () => {
//   alert("CHILD BOX CLICKED");
// }); // bubbling phase

// Parent.addEventListener(
//   "click",
//   () => {
//     alert("PARENT BOX CLICKED");
//   },
//     { capture: true }
// ); // capturing phase

// Parent.addEventListener("click", () => {
//   alert("PARENT BOX CLICKED");
// }); // bubbling phase

// // // EVENT.TARGET, EVENT.CURRENTTARGET AND THIS

// grandParent.addEventListener("click", (e) => {
//   console.log("GRAND PARENT BOX CLICKED");
//   console.log(e.target);
//   console.log(e.currentTarget);
// }); // bubbling phase

// Parent.addEventListener("click", function (e) {
//   console.log("PARENT BOX CLICKED");
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(this);
// }); // bubbling phase

// child.addEventListener("click", function (e) {
//   console.log("CHILD BOX CLICKED");
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(this);
// }); // bubbling phase

// // // HOW TO STOP PROPAGATION

// grandParent.addEventListener("click", (e) => {
//   console.log("GRAND PARENT BOX CLICKED");
//   console.log(e.target);
//   console.log(e.currentTarget);
//   // e.stopPropagation();
// });

// Parent.addEventListener("click", function (e) {
//   console.log("this is third parent");
// });

// Parent.addEventListener("click", function (e) {
//   console.log("PARENT BOX CLICKED");
//   console.log(e.target);
//   console.log(e.currentTarget);
//   // console.log(this);
//   // e.stopPropagation();
//   e.stopImmediatePropagation();
// });

// Parent.addEventListener("click", function (e) {
//   console.log("this is another parent");
// });

// child.addEventListener("click", function (e) {
//   console.log("CHILD BOX CLICKED");
//   console.log(e.target);
//   console.log(e.currentTarget);
//   // console.log(this);
// });

// // // EVENT DELEGATION

let container = document.querySelector(".container");

// // USING FOR-EACH LOOP

// let childrenArr = Array.from(container.children);
// console.log(childrenArr);

// childrenArr.forEach((elem) => {
//   elem.addEventListener("click", () => {
//     console.log(elem.innerText);
//   });
// });

// // USING EVENT DELEGATION

container.addEventListener("click", (e) => {
  let targetedValue = e.target;

  if (targetedValue.className === "box") {
    console.log(targetedValue.textContent);
  }
});
