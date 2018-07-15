// Create a new task
export function addTask(task) {
  return {
    type: 'ADD_TASK',
    task
  };
}

// Mark task as completed
export function markTaskCompleted(id) {
  return {
    type: 'MARK_COMPLETED',
    id
  };
}

// Delete task

export function deleteTask(id) {
  return {
    type: 'DELETE_TASK',
    id
  };
}
