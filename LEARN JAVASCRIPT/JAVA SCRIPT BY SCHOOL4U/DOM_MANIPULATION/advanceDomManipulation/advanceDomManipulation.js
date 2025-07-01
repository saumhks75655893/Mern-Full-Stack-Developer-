// // 1. DOM
// console.log(document);
// console.dir(document);

// let a = document.querySelectorAll("div");
// console.log(a);

// 2. SELECTION OF HTML ELEMENTS

// let tagSelector = document.getElementsByTagName("h1");
// console.log(tagSelector);

// let classSelector = document.getElementsByClassName("write");
// console.log(classSelector);

// let idSelector = document.getElementById("name");
// console.log(idSelector);

// let querySelector = document.querySelector("#name");
// console.log(querySelector);

// let querySelector1 = document.querySelector(".write");
// console.log(querySelector1);

// // ACCESSIBILITY OF PARENT AND THEIR CHILDS NODES
// let parentChildNodes = document.getElementById("write");
// console.log(parentChildNodes);
// console.log(parentChildNodes.firstChild);
// console.log(parentChildNodes.lastChild);
// console.log("childNodes");
// console.log(parentChildNodes.childNodes[0]);
// console.log(parentChildNodes.childNodes[1]);
// console.log(parentChildNodes.childNodes[2]);
// console.log(parentChildNodes.childNodes[3]);
// console.log("children :", parentChildNodes.children);
// console.log("childNodes : ", parentChildNodes.childNodes);

// // // MANIPULATING THE HTML
// let h1 = document.querySelector(".h1");

// // TAG MANUPULATION (NOT POSSIBLE )
// h1.nodeName = "p"; // tag name cann't be changed (there is not inbuild method to change the tags)
// h1.tagName = "div";
// console.log(h1.tagName);
// console.log(h1.firstChild.nodeName); // #text
// console.log(h1.firstChild.tagName); // undefined || if present then tag name

// // TEXT MANUPULATION (POSSIBLE)
// h1.innerText = "Mere ankhon me judayi ki nami hai sayian."; // text can be changed
// h1.textContent = "Mere ankhon me judayi ki nami hai sayian."; // text can be changed

// let value = h1.innerText; // only returns plain text remove all the formating, also don't ignore the style
// console.log(value);
// console.log(h1.textContent); // with all formating, but ignore the tag names

// // ELEMENT AND HTML MANUPULATION (You can do all things with innerHTML instead of innertext or textContent,innerHTML is more powerfull than innertext/textContent)

// h1.innerHTML = "<p>what Do you think about the efile tower</p>";
// console.log(h1.innerHTML); // returns with formating,with tag name (child tag) element and html can be change through innerHTML

// // // STYLE TAG MANUPULATES THE innertext (let's see how )

// console.log(h1.tagName);
// console.log(h1.nodeName);
// console.log(h1.innerText);
// console.log(h1.textContent);
// console.log(h1.innerHTML);

// // // INSERTION OF THE ELEMENTS (ADDITION OF ELEMENTS)

// let div = document.querySelector("div");
// let elem = document.createElement("p");
// elem.innerText = "class 4";
// elem.style.backgroundColor = "green";

// div.append(elem);
// div.prepend(elem);
// div.after(elem);
// div.before(elem);

// div.insertAdjacentElement("afterbegin", elem); // ==prepend
// div.insertAdjacentElement("beforeend", elem); // ==append
// div.insertAdjacentElement("beforebegin", elem); // ==before
// div.insertAdjacentElement("afterend", elem); // ==after

// // REMOVING THE ELEMENT
// elem.remove(); // can be removed any element create with html or created using js

// let p = div.children[0];
// p.remove();

// // // PARENT NODE

// let elem = document.createElement("p"); // creation of new element
// elem.style.backgroundColor = "yellow";
// elem.style.color = "blue";
// elem.innerText = "YELLOW BLUE";

// let alpha = document.querySelector("#alpha"); // existing element selection
// alpha.style.color = "black";
// alpha.style.backgroundColor = "green";
// alpha.innerHTML = "BLACK GREEN";

// let ParentNode = alpha.parentNode; // from existing element finding the parent node

// ParentNode.prepend(elem); // by using parent node adding new element

// let newElem = document.createElement("h1"); // creating new element newElem
// newElem.style.backgroundColor = "white";
// newElem.style.color = "teal";
// newElem.innerHTML = "WHITE TEAL";

// ParentNode.replaceChild(newElem, alpha); // replacing alpha with newElem
// ParentNode.removeChild(newElem); // removing newElem child

// let div = document.querySelector("div");
// let Child = ParentNode.children[2];
// ParentNode.insertBefore(elem, Child);

// // // ATTRIBUTE

// let alpha = document.querySelector(".alpha"); //selecting the alpha element
// console.log(alpha);
// let alphaAttributes = alpha.attributes; // to see all the attibutes used in the alpha element
// console.log(alphaAttributes); // for output of attribute list
// console.log(alphaAttributes[0]); //output-> alpha :  for output of attribute present at 0th key
// console.log(alphaAttributes[0].nodeValue); // for output of attribute value which is present at 0th key/index
// console.log(alphaAttributes[0].value); // same as upper

// console.log(alpha.getAttribute("title")); // same as upper but using the property of attributes

// alpha.setAttribute("class", "hello");
// let oldAttr = alphaAttributes[0].value; // output -> hello

// alpha.setAttribute("class", `${oldAttr} alpha`);
// console.log(alpha.getAttribute("class"));
