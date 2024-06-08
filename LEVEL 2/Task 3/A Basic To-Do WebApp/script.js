document.addEventListener('DOMContentLoaded', () => {
    // Form elements
    const taskForm = document.getElementById('task-form');
    const taskNameInput = document.getElementById('task-name');
    const taskStatusSelect = document.getElementById('task-status');
    const taskPrioritySelect = document.getElementById('task-priority');
    const taskValueSelect = document.getElementById('task-value');
    const taskNotesTextarea = document.getElementById('task-notes');

    // Table bodies
    const pendingTasksTableBody = document.querySelector('#pending-tasks-table tbody');
    const completeTasksTableBody = document.querySelector('#complete-tasks-table tbody');

    let tasks = [];
    let currentTaskId = null;

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const task = {
            id: currentTaskId !== null ? currentTaskId : Date.now(),
            name: taskNameInput.value,
            status: taskStatusSelect.value,
            priority: taskPrioritySelect.value,
            value: taskValueSelect.value,
            notes: taskNotesTextarea.value,
            completed: false
        };

        if (currentTaskId !== null) {
            tasks = tasks.map(t => (t.id === currentTaskId ? task : t));
            currentTaskId = null;
        } else {
            tasks.push(task);
        }

        renderTasks();

        // Clear form
        taskForm.reset();
    });

    function renderTasks() {
        pendingTasksTableBody.innerHTML = '';
        completeTasksTableBody.innerHTML = '';

        tasks.forEach(task => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${task.name}</td>
                <td>${task.status}</td>
                <td>${task.priority}</td>
                <td>${task.value}</td>
                <td>${task.notes}</td>
                <td class="${task.completed ? 'complete-label' : 'pending-label'}">
                    <i class="fa-regular ${task.completed ? 'fa-circle-check' : 'fa-clock'}"></i> ${task.completed ? 'Complete' : 'Pending'}
                </td>
                <td>
                    <button type="button" class="update-btn"><i class="fa-solid fa-pen-to-square"></i> Update</button>
                    <button type="button" class="complete-btn"><i class="fa-regular fa-circle-check"></i> ${task.completed ? 'Undo' : 'Complete'}</button>
                    <button type="button" class="delete-btn"><i class="fa-solid fa-trash"></i> Delete</button>
                </td>
            `;

            row.querySelector('.complete-btn').addEventListener('click', () => {
                task.completed = !task.completed;
                renderTasks();
            });

            row.querySelector('.delete-btn').addEventListener('click', () => {
                tasks = tasks.filter(t => t.id !== task.id);
                renderTasks();
            });

            row.querySelector('.update-btn').addEventListener('click', () => {
                taskNameInput.value = task.name;
                taskStatusSelect.value = task.status;
                taskPrioritySelect.value = task.priority;
                taskValueSelect.value = task.value;
                taskNotesTextarea.value = task.notes;
                currentTaskId = task.id;
            });

            if (task.completed) {
                completeTasksTableBody.appendChild(row);
                row.querySelector('.update-btn').remove();
            } else {
                pendingTasksTableBody.appendChild(row);
            }
        });
    }
});
