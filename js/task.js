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
    // console.log(createTaskElementLI);
    // append the create element item into the task container
    taskContainer.appendChild(createTaskElementLI);
    taskField.value = ' ';
    

});