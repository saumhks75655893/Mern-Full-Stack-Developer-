// let listContainer = document.querySelector(".listContainer");
// let inputToDos = document.querySelector("#inputToDos");
// let addButton = document.querySelector(".addButton");

// let addToDos = () => {
//   let inputContainer = document.createElement("div");
//   inputContainer.className = "listItems";

//   inputContainer.innerHTML = `
//         <p>${inputToDos.value}</p>
//         `;

//   let delButton = document.createElement("button");
//   delButton.innerHTML = "Delete";
//   delButton.classList.add("deleteButton");

//   delButton.addEventListener("click", () => {
//     inputContainer.remove();
//   });

//   inputContainer.append(delButton);
//   listContainer.prepend(inputContainer);
//   inputToDos.value = "";
// };

// addButton.addEventListener("click", addToDos);

// // // SCHOOL4U

let listContainer = document.querySelector(".listContainer");
let addButton = document.querySelector(".addButton");
let inputToDos = document.querySelector("#inputToDos");

let list = [];

function renderList(arr) {
  listContainer.innerHTML = ""; //
  arr.map((obj) => {
    let divElem = document.createElement("div");
    divElem.className = "listItems";

    divElem.innerHTML = `
          <p>${obj.task}</p>
          `;

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "deleteButton";
    divElem.append(deleteButton);

    deleteButton.onclick = () => deleteItem(obj.id);
    listContainer.append(divElem);
  });
}
renderList(list);

function addEvents() {
  let obj = {
    id: Date.now(),
    task: inputToDos.value,
  };

  list.unshift(obj);
  renderList(list);

  inputToDos.value = "";
}
addButton.addEventListener("click", addEvents);

function deleteItem(id) {
  let filteredList = list.filter((obj) => {
    return obj.id !== id;
  });

  list = filteredList;
  renderList(filteredList);
}
