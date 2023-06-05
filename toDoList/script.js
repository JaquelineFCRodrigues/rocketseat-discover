const buttonAddTasks = document.querySelector('#addBtn');
const inputAddTasks = document.querySelector('#inputTask');
const tasks = document.querySelector('#tasks');

buttonAddTasks.onclick = function(){
    if (inputAddTasks.value === '') {
        alert('Por favor digite uma tarefa')
    } else {
        tasks.innerHTML += `
         <div class="task">
             <li>${inputAddTasks.value}</li>
             <button class="delete">
             <i>
                <svg height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><g fill="none" fill-rule="evenodd" id="Action-/-25---Action,-bin,-delete,-complete,-bin,-garbage,-check,-removed,-done,-trash-icon" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M4,7.75 L20,7.75 L20,20.5 C20,21.6045695 19.1045695,22.5 18,22.5 L6,22.5 C4.8954305,22.5 4,21.6045695 4,20.5 L4,7.75 Z" id="Path" stroke="#FFFFFF" stroke-width="2"/><path d="M3,4 L8,4 L8.70498275,2.14478224 C8.8524847,1.7566192 9.22452258,1.5 9.63976633,1.5 L14.3602337,1.5 C14.7754774,1.5 15.1475153,1.7566192 15.2950173,2.14478224 L16,4 L21,4" id="Path" stroke="#FFFFFF" stroke-width="2"/><polyline id="Path" points="8 14.8214286 11.5 18.25 16 12.75" stroke="#FFFFFF" stroke-width="2"/></g></svg>
             </i>
            </button>
        </div>
        `;

        inputAddTasks.value = '';

        var currentTasks = document.querySelectorAll(".delete");
        for(var i=0; i<currentTasks.length; i++){
            currentTasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
};



