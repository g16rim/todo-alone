const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function checkTodo(event) { // css만 변경하면 되지 않을까..? ... ok
    const li = event.target.parentElement;
    if (li.classList == "checked") {
        li.classList.remove("checked");
        // todos checked false
        todos.forEach((todo) => {
            if(parseInt(li.id) === todo.id) todo.checked = false;
        })
    }
    else {
        li.classList.add("checked");

        // todos checked true
        todos.forEach(function(todo) {
            if(parseInt(li.id) === todo.id) {
                todo.checked = true;
            }
        });
    }
    // 새로고침 후에도 유지되게
    saveTodos();
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button2 = document.createElement("button");
    button2.innerText = "✔";
    button2.addEventListener("click", checkTodo);
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    const checked = newTodo.checked;
    if (checked) li.classList.add("checked");
    li.appendChild(span);
    li.appendChild(button2);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        checked: false,
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}