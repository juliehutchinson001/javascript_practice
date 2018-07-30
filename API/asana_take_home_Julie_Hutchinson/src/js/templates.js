class App {
  // Sets up the initial state of the app

  constructor() {

    this.tasks = [];
    this.addInitialEvents();

    // Getting any pre-existing tasks
    getAllTasks();

  }

  addInitialEvents() {
    // Getting Dom elements
    const showBtn = document.querySelector('.btn--secondary');
    const hideBtn = document.querySelectorAll('.btn--inline');
    const addTaskBtn = document.querySelector('.btn--primary');

    // Adding event listeners
    hideBtn.forEach(addHideRowEvent);

    showBtn.addEventListener('click', showAllRows);
    addTaskBtn.addEventListener('click', createTaskRow);

  }

};

