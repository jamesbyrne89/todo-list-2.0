import axios from 'axios';

// Fetch tasks
export function fetchTasks(res) {
  return function(dispatch) {
    axios.get('/api/tasks').then(res => {
      return dispatch({ type: 'FETCH_TASKS', payload: res.data });
    });
  };
}

// Handle loading state
export function tasksLoading() {
  return {
    type: 'TASKS_LOADING',
    payload: { loading: true }
  };
}

// Create a new task
export function addTask(task) {
  return function(dispatch) {
    axios.post('/api/tasks', task).then(res => {
      return dispatch({ type: 'ADD_TASK', payload: res.data });
    });
  };
}

// Mark task as completed
export function markCompleted(id) {
  return {
    type: 'MARK_COMPLETED',
    payload: id
  };
}

// Delete task

export function deleteTask(id) {
  return {
    type: 'DELETE_TASK',
    id
  };
}
