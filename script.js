function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() ==="") {
        alert("Please enter a task.");
        return;
    }
    const li = document.createElement('li');
    li.textContent = taskInput.value;

    li.addEventListener('click', function() {
        li.classList.toggle('done'):
});

const deleteButton = document.createElement('button');
deleteButton.textContent = "Delete";
deleteButton.style.marginLeft = "10px";
deleteButton.addEventListener('click',function() {
    taskList.removeChild(li);
});

li.appendChild(deleteButton);
taskList.appendChild(li);
taskInput.value ="";
}
