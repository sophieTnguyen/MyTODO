window.addEventListener("DOMContentLoaded", function(){
    const taskList = document.getElementById('task-list');
    const taskForm = document.querySelector('input');
    const submitButton = document.querySelector('form');
    
    submitButton.addEventListener("submit", function(event) {
        event.preventDefault();
        let task = createTask(taskForm.value);
        task.Load();
        taskForm.value = '';
    })

    function createTask(text) 
    {
        return {
            text,
            Load: function() {
                const myTask = document.createElement('li');
                taskList.appendChild(myTask);
                myTask.className = "list-group-item";
                myTask.innerText = text;
            }
    
        }
    }   
});

