let editTaskId = null;

function addTask() {
    const inputField = document.getElementById('tf-input');
    const taskText = inputField.value.trim();
    if (!taskText) return;

    if (editTaskId) {

        const taskItem = document.getElementById(editTaskId);
        taskItem.querySelector('span').textContent = taskText;
        resetForm();
        return;
    }

    const taskId = new Date().valueOf().toString() + Math.random().toString(36).substring(2, 7);
    const task = document.createElement('li');
    task.classList.add('list-item');
    task.id = taskId;

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.onclick = () => editTask(taskId);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = () => deleteTask(taskId);

    task.appendChild(taskSpan);
    task.appendChild(editButton);
    task.appendChild(deleteButton);

    document.getElementById('task-container').appendChild(task);

    inputField.value = '';
}

function deleteTask(id) {
    document.getElementById(id).remove();
    resetForm();
}

function editTask(id) {
    const task = document.getElementById(id);
    const taskText = task.querySelector('span').textContent;

    document.getElementById('tf-input').value = taskText;
    document.getElementById('task-button').textContent = 'Update Task';
    editTaskId = id;
}

function resetForm() {
    document.getElementById('tf-input').value = '';
    document.getElementById('task-button').textContent = 'Add Task';
    editTaskId = null;
}
