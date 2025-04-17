window.addEventListener("DOMContentLoaded", function(){
    const taskList = document.getElementById('task-list');
    const taskForm = document.getElementById('taskNameForm');
    const submitButton = document.querySelector('form');
    
    submitButton.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log(taskForm.value, taskForm)
        let task = new Task(taskForm.value);
        task.Load();
        taskForm.value = '';
    })

    function Task(text) 
    {
        this.text = text;
        this.Load =  function() {

            const li = document.createElement('li');
            li.className = 'list-group-item';

            const div = document.createElement('div');
            div.className = 'form-check';

            const checkbox = document.createElement('input');
            checkbox.className = 'form-check-input';
            checkbox.type = 'checkbox';
            // ID

            const label = document.createElement('label');
            label.className = 'form-check-label';
            label.htmlFor = checkbox.id;
            label.innerText = this.text;
            console.log(this.text, this)

            div.appendChild(checkbox);
            div.appendChild(label);
            li.appendChild(div);
            taskList.appendChild(li);

            checkbox.addEventListener("change", function() 
            {
                li.remove();
            });
        };
    
    };
    }
)

