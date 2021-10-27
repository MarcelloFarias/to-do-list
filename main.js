const inputTask = document.querySelector('#task');
const list = document.querySelector('.task-list');
const btnAdd = document.querySelector('.btn-add');

function createTask() {
    if (inputTask.value != ''){
        const task = document.createElement('li');
        task.classList.add('task');
        task.innerText = inputTask.value;

        const buttonsTask = document.createElement('div');
        buttonsTask.classList.add('buttons-task');

        const btnDelete = document.createElement('button');
        btnDelete.innerText = 'Delete';
        btnDelete.classList.add('btn-delete');

        buttonsTask.appendChild(btnDelete);

        task.appendChild(buttonsTask);

        list.appendChild(task);
        inputTask.value = '';

        btnDelete.addEventListener('click', function() {
            list.removeChild(task);
        });

        task.addEventListener('click', function() {
            if(task.className == 'task') {
                task.classList.add('task-checked');
                btnDelete.classList.add('btn-delete-checked');
            }
            else {
                task.className = 'task';
                btnDelete.className = 'btn-delete';
            }
        });    
    }
    else {
        alert("You didn't type any task");
    }
}

btnAdd.addEventListener('click', createTask);