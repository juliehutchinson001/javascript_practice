const getAllTasks = () => {
  // Fetch all of the task from Asana

  const url = 'https://app.asana.com/api/1.0/projects/670284833006984/tasks?opt_fields=name,id';

  fetch(url, {
    cache: 'no-cache',
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36',
      'content-type': 'application/json',
      'Authorization': 'Bearer 0/eb7c3fec7263aaad65c6f6553537fa66'
    },

    method: 'GET'
  })
  .then(response => response.json())
  .then(asanaTasks => insertTaskFromAsana(asanaTasks))
  .catch(err => console.log(err))

};

const deleteTask = (task, taskId) => {
  // Delete a task in Asana's site

  const url = `https://app.asana.com/api/1.0/tasks/${taskId}`;

  fetch(url, {
    cache: 'no-cache',
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36',
      'content-type': 'application/json',
      'Authorization': 'Bearer 0/eb7c3fec7263aaad65c6f6553537fa66'
    },

    method: 'GET'
  })
  .then(response => response.json())
  .then(asanaTasks => insertTaskFromAsana(asanaTasks))
  .catch(err => console.log(err))

};

// Delete a task
// const url = 'https://app.asana.com/api/1.0/tasks/<task id>';
