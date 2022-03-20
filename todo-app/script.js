const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todoUL = document.querySelector('#todos');

const todos = JSON.parse(localStorage.getItem('todos'));
if (todos) {
    todos.forEach(todo => {
        addTodo(todo);
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement('li');

        if (todo && todo.completed) {
            todoEl.classList.add('completed');
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener('click', function () {
            todoEl.classList.toggle('completed');
            updateLS();
        });

        todoEl.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            todoEl.remove();
            updateLS();
        });

        input.value = '';
        todoUL.appendChild(todoEl);
        updateLS();
    }
}

function updateLS() {
    const todoEls = document.querySelectorAll('li');

    const todos = [];
    todoEls.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        });
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}
