const addHideRowEvent = (element) => {
  // Adds 'hide' event to hide button

  element.addEventListener('click', () => {
    element.parentElement.style.display = 'none';
  });
};

const showDeleteBtn = (element) => {
  // Toggle delete button when task is selected
  const deleteRowBtn = document.querySelector('.btn--caution');
  element.addEventListener('click', () => {
    deleteRowBtn.style.visibility = 'visible';
  });

  element.addEventListener('focusout', () => {
    deleteRowBtn.style.visibility = 'hidden';
  });
};
