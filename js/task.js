// Create the daily task and display the task
//select the button
document.getElementById('update-btn').addEventListener('click', function(){
    //select the input filed
    const taskField = document.getElementById('task-input-filed');
    // get the input filed value
    const taskContent = taskField.value;
    // select the task container
    const taskContainer = document.getElementById('task-container');
    const createTaskElementLI = document.createElement('li');
    createTaskElementLI.innerText = taskContent;
    createTaskElementLI.classList.add('item');
    // append the create element item into the task container
    taskContainer.appendChild(createTaskElementLI);
    taskField.value = ' ';
});

// delete the daily created task
document.getElementById('task-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})