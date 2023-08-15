function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value !== '') {
      const taskText = taskInput.value;
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-button" onclick="removeTask(this)">Delete</button>
      `;
      taskList.appendChild(taskItem);
      
      taskInput.value = '';
    }
  }
  
  function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
  }
  
