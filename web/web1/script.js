let editTaskId = null; // Simpan ID tugas yang sedang diedit

function addTask() {
    const inputField = document.getElementById('tf-input');
    const taskText = inputField.value.trim();
    if (!taskText) return; // Cegah input kosong

    if (editTaskId) {
        // Jika sedang dalam mode edit, update teks tugas
        const taskItem = document.getElementById(editTaskId);
        taskItem.querySelector('span').textContent = taskText;
        resetForm();
        return;
    }

    // Buat elemen tugas baru
    const taskId = new Date().valueOf().toString() + Math.random().toString(36).substring(2, 7);
    const task = document.createElement('li');
    task.classList.add('list-item');
    task.id = taskId;

    // Span untuk teks tugas
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Tombol Edit
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.onclick = () => editTask(taskId);

    // Tombol Delete
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = () => deleteTask(taskId);

    // Tambahkan elemen ke dalam task
    task.appendChild(taskSpan);
    task.appendChild(editButton);
    task.appendChild(deleteButton);

    // Tambahkan ke daftar
    document.getElementById('task-container').appendChild(task);

    // Reset input
    inputField.value = '';
}

function deleteTask(id) {
    document.getElementById(id).remove();
    resetForm(); // Jika sedang edit, reset form juga
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
