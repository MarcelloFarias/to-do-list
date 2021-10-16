const inputTask = document.querySelector('#task');
const list = document.querySelector('.task-list');
const btnAdd = document.querySelector('.btn-add');

function createTask() {
    if (inputTask.value != ''){
        const task = document.createElement('li');
        task.className = 'task';
        task.innerText = inputTask.value;

        const buttonsTask = document.createElement('div');
        buttonsTask.className = 'buttons-task';

        const btnDelete = document.createElement('button');
        btnDelete.innerText = 'Delete';
        btnDelete.className = 'btn-delete';

        buttonsTask.appendChild(btnDelete);

        task.appendChild(buttonsTask);

        list.appendChild(task);
        inputTask.value = '';

        btnDelete.addEventListener('click', function() {
            list.removeChild(task);
        });
    }
    else {
        alert('You dont type any task');
    }
}

btnAdd.addEventListener('click', createTask);