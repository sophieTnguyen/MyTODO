const taskForm = document.getElementById('taskNameForm');
const submitButton = document.querySelector('submit');

/*
submitButton.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("SUBMITTED")
})
*/

function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    // Your custom code here to handle the submission
    console.log('Form submitted!');
}