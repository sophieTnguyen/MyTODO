window.addEventListener("DOMContentLoaded", function(){
    const taskList = document.getElementById('task-list');
    const taskForm = document.getElementById('taskNameForm');
    const submitButton = document.querySelector('form');
    const main = this.document.getElementById("main");

    taskList.addEventListener("change", function(event) {
        event.target.closest(".list-group-item  ").remove();
    });
    
    submitButton.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log(taskForm.value, taskForm)
        if (taskForm.value !== '')
        {
            const task = new Task(taskForm.value);
            task.Load();
            taskForm.value = '';
        }
        else 
        {
            const alert = document.createElement('div');
            alert.className = "alert alert-warning alert-dismissible fade show";
            alert.setAttribute('role',"alert")
            alert.innerText = "Enter a valid task";
            main.append(alert);
        }

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

            const label = document.createElement('label');
            label.className = 'form-check-label';
            label.htmlFor = checkbox.id;
            label.innerText = this.text;
            console.log(this.text, this)

            div.appendChild(checkbox);
            div.appendChild(label);
            li.appendChild(div);
            taskList.appendChild(li);
        };
    
    };
    }
)

