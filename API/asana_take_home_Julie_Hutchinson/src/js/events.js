/**
 * @summary Adds 'hide' event to hide button
 * @param {HTMLElement} hideBtn The hide button in every task
 * @returns void
 */
const addHideRowEvent = hideBtn => {
  hideBtn.addEventListener("click", () => {
    hideBtn.parentElement.style.display = "none";
  });
};

/**
 * @summary Toggle the delete button's visibility when task comes in and out of focus
 * @param {HTMLElement} taskInput The input of the task
 * @returns void
 */
const addToggleDeleteBtnEvent = taskInput => {
  const deleteRowBtn = document.querySelector(".btn--caution");
  taskInput.addEventListener("click", () => {
    deleteRowBtn.style.visibility = "visible";
  });
};

/**
 * @summary Adds an event that saves the updated task name to Asana when the input is out of focus
 * @param {HTMLElement} taskInput The input of the task
 * @returns void
 */
const addEditEvent = taskInput => {
  taskInput.addEventListener("focusout", event => {
    editTaskToAsana(event.target.id, event.target.value);
  });
};

const addTaskFocusEvent = taskInput => {
  taskInput.addEventListener("focus", event => {
    lastActiveTaskId = event.target.id;
  });
};

/**
 * @summary Displays all of the hidden rows
 * @returns void
 */
const showAllRows = () => {
  const allRows = document.querySelectorAll(".task-list__row");

  allRows.forEach(element => {
    element.style.display = "flex";
  });
};

/**
 * @summary Creates a task row when a new task is added.
 * @param {String} task The text of the task
 * @param {Number} taskId The id of the task
 * @returns void
 */
const createTaskRowInDom = (task = "", taskId = 0) => {
  const taskRow = document.createElement("div");
  const taskInput = document.createElement("input");
  const taskList = document.querySelector(".task-list");
  const taskHideBtn = document.createElement("button");
  taskInput.setAttribute("id", taskId);
  taskHideBtn.innerHTML = "Hide";
  taskInput.value = task;

  addHideRowEvent(taskHideBtn);
  addToggleDeleteBtnEvent(taskInput);
  addEditEvent(taskInput);
  addTaskFocusEvent(taskInput);

  taskRow.classList.add("task-list__row");
  taskInput.classList.add("task-list__txt");
  taskHideBtn.classList.add("btn", "btn--inline");

  taskRow.appendChild(taskInput);
  taskRow.appendChild(taskHideBtn);
  taskList.prepend(taskRow); // Prepend so that new tasks are at the top
};

/**
 * @summary Inserts the tasks from Asana (if any) into the dom on app load
 * @param {Array} tasks The existing tasks from Asana
 * @returns void
 */
const insertTasksToDom = tasks => {
  // loops in reverse order because createTaskRowInDom prepends
  for (let index = tasks.length - 1; index > -1; index--) {
    createTaskRowInDom(tasks[index].name, tasks[index].id);
  }
};

const deleteTaskFromDom = taskId => {
  document.getElementById(taskId).parentNode.remove();
};

/**
 * @summary Attaches the events of show, hide and add button when app loads
 * @returns void
 */
const addInitialEventListeners = () => {
  const showAllBtn = document.querySelector(".btn--secondary");
  const addTaskBtn = document.querySelector(".btn--primary");
  const deleteBtn = document.querySelector(".btn--caution");

  showAllBtn.addEventListener("click", showAllRows);

  deleteBtn.addEventListener("click", async () => {
    debugger;
    deleteTaskFromDom(lastActiveTaskId);
    deleteBtn.style.visibility = "hidden";
    await deleteTaskFromAsana(lastActiveTaskId);
  });

  addTaskBtn.addEventListener("click", async () => {
    createTaskRowInDom(); // Create task in dom first to avoid awaiting for api response which is bad ux
    const { data } = await postTaskToAsana();
    document.querySelector(".task-list__txt").setAttribute("id", data.id);
  });
};
