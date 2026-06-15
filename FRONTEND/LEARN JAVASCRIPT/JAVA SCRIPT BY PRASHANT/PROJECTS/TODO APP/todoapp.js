let todoList = [
  {
    item: "time to finish js",
    dueDate: "21/01/2025",
  },

  {
    item: "go to Varanasi",
    dueDate: "21/01/2025",
  },
];
displayTodoItems();

function addTodo() {
  let inputValue = document.querySelector("#todo-item");
  let dateValue = document.querySelector("#todo-date");
  let todoItem = inputValue.value;
  let todoDate = dateValue.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  localStorage.setItem("todolist", JSON.stringify(todoList));
  inputValue.value = "";
  dateValue.value = "";

  displayTodoItems();
}

function displayTodoItems() {
  let containerItem = document.querySelector(".container-items");
  // console.log(items);
  let items = localStorage.getItem('todolist');
  const todoListData = JSON.parse(items);
  const value = todoListData.dueDate;

  // console.log(items.dueDate);
  console.log(value);
  
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `
      
        <span>${item} </span>
        <span>${dueDate} </span>
        <button class='del-btn' onclick='todoList.splice(${i},1);
        displayTodoItems();'> delete </button>
      
    `;
  }

  containerItem.innerHTML = newHtml;
  // containerItem.innerText = containerItem.innerText + '\n' + todoList[i];
}
