
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  let taskForm = document.getElementById('create-task-form')
  let newTaskDescription = document.getElementById('new-task-description')
  let tasksUl = document.getElementById('tasks');
  let button = document.getElementById('button');

  button.addEventListener('click', handleButtonClick)

  function createButton() {
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'x'
    newTaskDescription.append(deleteButton);
  }


  function handleButtonClick(e) {
    e.preventDefault();
    let li = document.createElement('li');
    li.innerText = newTaskDescription.value;
    tasksUl.append(li);
  }

});
