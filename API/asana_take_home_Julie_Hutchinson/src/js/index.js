const app = new App();

const insertTask = existingTasks => {
  const taskTxt = document.querySelectorAll(".task-list__txt");

  [...taskTxt].forEach(index => {
    let currentElement = taskTxt[index];
    console.log(taskTxt[index]);
    showDeleteBtn(currentElement);

    if (index < existingTasks.data.length) {
      let existingTask = existingTasks.data[index].name;
      currentElement.value = existingTask;
    }
  });
};

const main = () => {
  // Sets up the initial state of the app

  // Getting Dom elements
  const showBtn = document.querySelector(".btn--secondary");
  const hideBtn = document.querySelectorAll(".btn--inline");
  const addTaskBtn = document.querySelector(".btn--primary");

  const taskList = document.querySelector(".task-list");

  // Adding event listeners
  hideBtn.forEach(addHideRowEvent);
  showBtn.addEventListener("click", showAllRows);

  addTaskBtn.addEventListener("click", () => {
    // Create new task elements
    let taskRow = document.createElement("div");
    let taskTxt = document.createElement("input");
    let taskHideBtn = document.createElement("button");
    taskHideBtn.innerHTML = "Hide";

    // Add event listeners
    addHideRowEvent(taskHideBtn);
    showDeleteBtn(taskTxt);

    // Add classes
    taskRow.classList.add("task-list__row");
    taskTxt.classList.add("task-list__txt");
    taskHideBtn.classList.add("btn", "btn--inline");

    // Insert into the DOM
    taskRow.appendChild(taskTxt);
    taskRow.appendChild(taskHideBtn);
    taskList.appendChild(taskRow);
  });

  // Getting any pre-existing tasks
  getAllTasks();
};

// main();
