import axios from 'axios';

// Fetch tasks

export function fetchTasks(res) {
  return function(dispatch) {
    axios
      .get('/api/tasks')
      .then(res => dispatch({ type: 'FETCH_ITEMS', payload: res.data }));
  };
}

// Create a new task
export function addTask(task) {
  return {
    type: 'ADD_TASK',
    task
  };
}

// Mark task as completed
export function markCompleted(id) {
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
