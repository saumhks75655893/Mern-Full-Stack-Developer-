let todoInput = document.querySelector("#todoInput");
let addBtn = document.querySelector("#addBtn");
let todoContainer = document.querySelector(".todoContainer");
let todoText = document.querySelector(".todoText");

// Add data to api using add button
addBtn.addEventListener("click", postTodo);

// API
let api = "https://69f086efc1533dbedc9d2fe3.mockapi.io/api/v1/todos";

// Fetching TODOs from API
async function fetchTodos() {
  let data = await fetch(api);
  let todos = await data.json();

  if (data) {
    todoContainer.innerHTML = "";
    todos.forEach((res) => {
      let div = document.createElement("div");
      div.className = "todo";
      div.innerHTML = `
      <p class="todoText">${res.text}</p>
      <input type="text" id="editInput" placeholder="Enter a new todo...✍" value = '${res.text}'>
      <div class="buttonContainer">
            <button class="deletBtn">Delete</button>
            <button class="editBtn">Edit</button>
            <button class="saveBtn">Save</button>
        </div>
    `;

      // Selection of buttons
      let deletBtn = div.querySelector(".deletBtn");
      let editBtn = div.querySelector(".editBtn");
      let saveBtn = div.querySelector(".saveBtn");
      let todoText = div.querySelector(".todoText");
      let editInput = div.querySelector("#editInput");

      // Delete todo
      deletBtn.addEventListener("click", function () {
        deleteTodo(res.id);
      });

      // Edit todo
      editBtn.addEventListener("click", function () {
        editBtn.style.display = "none";
        saveBtn.style.display = "inline";
        todoText.style.display = "none";
        editInput.style.display = "inline";
      });
      // Save todo
      saveBtn.addEventListener("click", async function () {
        let editData = editInput.value.trim();
        let response = await editTodo(res.id, editData);
        if (response.status === 200) {
          fetchTodos();
        }

        editBtn.style.display = "inline";
        saveBtn.style.display = "none";
        todoText.style.display = "inline";
        editInput.style.display = "none";
      });

      todoContainer.appendChild(div);
    });
  }
}

// Posting todos
async function postTodo() {
  let text = todoInput.value.trim();
  todoInput.value = "";
  let objData = {
    text,
  };
  let res = await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });

  if (res.status === 201) {
    fetchTodos();
  }
}

// Delete Todos from api
async function deleteTodo(id) {
  let res = await fetch(`${api}/${id}`, {
    method: "DELETE",
  });

  if (res.status === 200) {
    fetchTodos();
  }
}

// Edit Todos
async function editTodo(id, text) {
  let objData = {
    text,
  };
  let res = await fetch(`${api}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });

  // console.log(res);

  return res;
}

fetchTodos();
