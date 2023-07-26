const buttonAddTasks = document.querySelector('#addBtn'); // seleciona e armazena os elementos desse ID
const inputAddTasks = document.querySelector('#inputTask'); // seleciona e armazena os elementos desse ID
const tasks = document.querySelector('#tasks'); // seleciona e armazena os elementos desse ID

// Função para criar os elementos HTML da tarefa
function createTaskElement(taskText) {
    const taskElement = document.createElement('div');
    taskElement.classList.add("task");
    taskElement.innerHTML = `
            <li class="task-item">${taskText}</li>
            <div class="buttons">
                <button type="button" class="edit">
                    <i>
                        <?xml version="1.0" ?><svg height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z" fill="#ffffff"/></svg>
                    </i>
                </button>
                <button class="delete">
                    <i>
                        <svg height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><g fill="none" fill-rule="evenodd" id="Action-/-25---Action,-bin,-delete,-complete,-bin,-garbage,-check,-removed,-done,-trash-icon" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M4,7.75 L20,7.75 L20,20.5 C20,21.6045695 19.1045695,22.5 18,22.5 L6,22.5 C4.8954305,22.5 4,21.6045695 4,20.5 L4,7.75 Z" id="Path" stroke="#FFFFFF" stroke-width="2"/><path d="M3,4 L8,4 L8.70498275,2.14478224 C8.8524847,1.7566192 9.22452258,1.5 9.63976633,1.5 L14.3602337,1.5 C14.7754774,1.5 15.1475153,1.7566192 15.2950173,2.14478224 L16,4 L21,4" id="Path" stroke="#FFFFFF" stroke-width="2"/><polyline id="Path" points="8 14.8214286 11.5 18.25 16 12.75" stroke="#FFFFFF" stroke-width="2"/></g></svg>
                    </i>
                </button>
            </div>
        `;
        return taskElement;
}

// Função para adicionar uma nova tarefa
function addTask() {
    const taskText = inputAddTasks.value.trim();
    if (taskText === '') {
        alert('Por favor digite uma tarefa');
    } else {
        const taskElement = createTaskElement(taskText);
        tasks.appendChild(taskElement);
        inputAddTasks.value = '';
        saveTasksToLocalStorage();
        editAndDeleteEvents(taskElement);
    }
}

// Função para editar uma tarefa
function editTask(taskItem, inputField) {
    const newText = inputField.value.trim();
    taskItem.textContent = newText;
    saveTasksToLocalStorage(); // update
}

// Função para vincular eventos de editar e excluir
function editAndDeleteEvents(taskElement) {
    const editButton = taskElement.querySelector(".edit");
    const deleteButton = taskElement.querySelector(".delete");
    const taskItem = taskElement.querySelector(".task-item");

    editButton.addEventListener("click", function () {
        const currentText = taskItem.textContent;
        const inputField = document.createElement("input");
        inputField.id = "edit-task-item";
        inputField.value = currentText;

        taskItem.textContent = "";
        taskItem.appendChild(inputField);
        inputField.focus();

        inputField.addEventListener("keyup", function (e) {
            if (e.key === "Enter") {
                editTask(taskItem, inputField);
            }
        });

        inputField.addEventListener("blur", function () {
            editTask(taskItem, inputField);
        });
    });

    deleteButton.addEventListener("click", function () {
        taskElement.remove();
        saveTasksToLocalStorage(); // Chamar a função para atualizar o localStorage após exclusão
    });
}

 // Função para salvar as tarefas no Local Storage
 function saveTasksToLocalStorage() {
    const currentTasks = document.querySelectorAll(".task");
    const tasksArray = [];

    currentTasks.forEach(function (taskElement) {
        const taskText = taskElement.querySelector(".task-item").textContent;
        tasksArray.push(taskText);
    });

    localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

// Função para carregar as tarefas do Local Storage
function loadTasksFromLocalStorage() {
    const tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];

    tasksArray.forEach(function (taskText) {
        const taskElement = createTaskElement(taskText);
        tasks.appendChild(taskElement);
        editAndDeleteEvents(taskElement);
    });
}

// Vincular o evento de adicionar tarefa ao botão
buttonAddTasks.addEventListener("click", addTask);

// Vincular o evento de adicionar tarefa ao dar enter
inputAddTasks.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        addTask()
    }
});

// Carregar tarefas do Local Storage ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    loadTasksFromLocalStorage();
});

// Vincular eventos de editar e excluir para tarefas existentes
const currentTasks = document.querySelectorAll(".task");
currentTasks.forEach(function (taskElement) {
    editAndDeleteEvents(taskElement);
});

