// const todoListItem = document.createElement('div');
// const itemComplete = document.createElement('div');
// const itemName = document.createElement('div');
// const itemClose = document.createElement('div');
//
// todoListItem.classList.add('todo-list__item');
// itemComplete.classList.add('todo-list__item-complete');
// itemName.classList.add('todo-list__item-name');
// itemClose.classList.add('todo-list__item-close');
//
// itemClose.textContent = '×';
//
// todoListItem.appendChild(itemComplete);
// todoListItem.appendChild(itemName);
// todoListItem.appendChild(itemClose);
//
// document.querySelector('.todo-list')
//     .appendChild(todoListItem);

const completeAllButton = document.querySelector('.creator__complete-all');
completeAllButton.addEventListener('click', () => {
    const allTodos = document.querySelectorAll('.todo-list__item');
    for (const todo of allTodos) {
        completeTodo(todo);
    }
})
function completeTodo(todoElement) {
    todoElement.classList.add('todo-list__item_completed');
}




const inputName = document.querySelector('.creator__name-input');

inputName.onkeydown = function (keyDownEvent) {
    if (keyDownEvent.key === 'Enter') {
        const todoName = inputName.value;
        const newTodo = createTodoHtml(todoName);
        const completeTodoButton = newTodo.querySelector('.todo-list__item-complete');
        completeTodoButton.addEventListener('click', () => {
            toggleTodoCompleteState(newTodo);
        });
        const removeTodoButton = newTodo.querySelector('.todo-list__item-close');
        removeTodoButton.addEventListener('click', () => {
            removeTodo(newTodo);
        })
        const todoList = document.querySelector('.todo-list');
        todoList.appendChild(newTodo)
    }
}

function createHtml(htmlString) {
    const element = document.createElement('div');

    element.innerHTML = htmlString.trim();

    return element.firstElementChild;
}

function toggleTodoCompleteState(todoElement) {
    todoElement.classList.toggle('todo-list__item_completed');

}

function removeTodo(todoElement) {
    todoElement.remove();
}

function createTodoHtml(name) {
    return createHtml(`
        <div class="todo-list__item">
            <div class="todo-list__item-complete"></div>
            <div class="todo-list__item-name">${name}</div>
            <div class="todo-list__item-close"> &#215;</div>
        </div>
    `);
}


