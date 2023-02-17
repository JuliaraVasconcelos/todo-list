const addForm = document.querySelector('.add-form');
const addTask = document.querySelector('.add-task');
const edit = document.querySelector('#edit');
const del = document.querySelector('#delete');
const toDoList = document.querySelector('.todo-list')
const editForm = document.querySelector('.edit-form')
const cancelBtn = document.querySelector('#cancel-edit-btn');

let oldInputValue;

const saveToDo = (text) =>{
    const toDo = document.createElement("tr")
    toDo.classList.add('todo-list')

    const toDoTitle = document.createElement('td')
    toDoTitle.innerHTML = '<h3>' + text + '</h3>'
    toDo.appendChild(toDoTitle)

    const toDoTime = document.createElement('td')
    now = new Date()
    toDoTime.innerHTML = now.getHours()+ ':'+ now.getMinutes() + ' - ' + now.getDate() + '/' + now.getMonth() + '/' + now.getFullYear()
    toDo.appendChild(toDoTime)

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('done-todo')
    doneBtn.innerHTML = '<span class="material-symbols-outlined done-todo">check_circle</span >'
    toDo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-todo')
    editBtn.innerHTML = '<span class="material-symbols-outlined edit-todo">edit_square</span>'
    toDo.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-todo')
    deleteBtn.innerHTML = '<span class="material-symbols-outlined delete-todo">delete</span>'
    toDo.appendChild(deleteBtn)

    toDoList.appendChild(toDo);
    addTask.value = '';
    addTask.focus();
}

const toggleForms = () => {
    editForm.classList.toggle('hide')
    addForm.classList.toggle('hide')
    toDoList.classList.toggle('hide')
}

// ----- Events ------
addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = addTask.value

    if(inputValue){
        saveToDo(inputValue)
    }
})

document.addEventListener('click', (e) =>{
    const targetEl = e.target;
    const parentEl = targetEl.closest('tr');
    let toDoTitle;

    if(parentEl && parentEl.querySelector('h3')){
        toDoTitle = parentEl.querySelector('h3').innerText
    }

    if (targetEl.classList.contains('done-todo')){
        parentEl.classList.toggle('done');   
    }

    if (targetEl.classList.contains('edit-todo')) {
        toggleForms();
        editForm.value = toDoTitle;
        oldInputValue = toDoTitle
    }

    if (targetEl.classList.contains('delete-todo')) {
        parentEl.remove();
    }
})

cancelBtn.addEventListener('click', (e) => {
    e.preventDefault()
    toggleForms()
})