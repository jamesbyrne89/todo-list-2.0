// Create a new task
function addTask(task) {
  return {
    type: 'ADD_TASK',
    task
  };
}

// Mark task as completed
function markTaskCompleted(id) {
  return {
    type: 'MARK_COMPLETED',
    id
  };
}

// Delete task

function deleteTask(id) {
  return {
    type: 'DELETE_TASK',
    id
  };
}
