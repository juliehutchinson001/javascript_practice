const showAllRows = () => {
  // Displays all of the hiddens rows

  const allRows = document.querySelectorAll('.task-list__row');

  allRows.forEach(element => {
    element.style.display = 'flex';
  });

};

const createTaskRow = (task) => {

  // Create new task elements
  const taskRow = document.createElement('div');
  const taskTxt = document.createElement('input');
  const taskList = document.querySelector('.task-list');
  const taskHideBtn = document.createElement('button');
  taskHideBtn.innerHTML = 'Hide';

  // Add event listeners
  addHideRowEvent(taskHideBtn);
  showDeleteBtn(taskTxt);

  // Add classes
  taskRow.classList.add('task-list__row');
  taskTxt.classList.add('task-list__txt');
  taskHideBtn.classList.add('btn', 'btn--inline');

  // Insert task from asana to input
  if (task !== 'undefined') {
    taskTxt.value = task;
  }

  // Insert into the DOM
  taskRow.appendChild(taskTxt);
  taskRow.appendChild(taskHideBtn);
  taskList.prepend(taskRow);

};

const insertTaskFromAsana = (existingTasks) => {
  // Insert all of the existing task from Asana into the app

  for (let index = (existingTasks.data.length - 1); index > -1; index--) {
    createTaskRow(existingTasks.data[index].name);

  }
};
