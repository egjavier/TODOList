const addTodo = document.getElementById('add-todo');
const todoHTML = document.getElementById('todo-HTML');
const resetTodo = document.getElementById('reset-todo');
todoHTML.innerHTML = JSON.parse(localStorage.getItem('allTodos')) || '';
let todos = JSON.parse(localStorage.getItem('todos')) || [];

addTodo.onclick = function() {
  const todo = document.getElementById('todo');
  const todoDate = document.getElementById('todo-date');
  todos.push({todoName: todo.value, todoDueDate: todoDate.value});
  console.log(todos);
  render();
  todo.value = '';
  todoDate.value = '';
}

resetTodo.onclick = function() {
  todos = [];
  todoHTML.innerHTML = '';
  localStorage.removeItem('todos');
  localStorage.removeItem('allTodos');
}

function render() {
  let allTodos = '';
  localStorage.setItem('todos', JSON.stringify(todos));
  for(i = 0; i < todos.length; i++) {
    let allTodosHTML = `
      <div class="todoStyle">
      <p class="nameStyle">${todos[i].todoName}</p>
      <p class="dateStyle">${todos[i].todoDueDate}</p>
      <button class="deleteStyle" onclick = "
        todos.splice(${i}, 1);
        render();
        localStorage.removeItem('todos${i}');
      ">Delete</button>
      </div>
    `
    allTodos += allTodosHTML;
  }
  todoHTML.innerHTML = allTodos;
  localStorage.setItem('allTodos', JSON.stringify(todoHTML.innerHTML));
}