import axios from 'axios';

// Fetch tasks
export function fetchTasks() {
  return function(dispatch) {
    axios
      .get('/api/tass')
      .then(res => {
        dispatch({ type: 'HAS_ERROR', payload: false });
        dispatch({ type: 'FETCH_TASKS', payload: res.data });
      })
      .catch(err => dispatch({ type: 'HAS_ERROR', payload: true }));
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
    dispatch({ type: 'TASKS_LOADING', payload: true });
    axios
      .post('/api/tasks', task)
      .then(res => {
        dispatch({ type: 'HAS_ERROR', payload: false });
        dispatch({ type: 'ADD_TASK', payload: res.data });
        dispatch({ type: 'TASKS_LOADING', payload: false });
      })
      .catch(err => dispatch({ type: 'HAS_ERROR', payload: true }));
  };
}

// Mark task as completed
export function toggleCompleted(id, completedState) {
  return function(dispatch) {
    axios
      .put(`/api/tasks/${id}`, { completed: completedState })
      .then(res => {
        dispatch({ type: 'HAS_ERROR', payload: false });
        dispatch({ type: 'TOGGLE_COMPLETED', payload: res.data });
      })
      .catch(err => dispatch({ type: 'HAS_ERROR', payload: true }));
  };
}

// Delete task

export function deleteTask(id) {
  return function(dispatch) {
    axios
      .delete(`/api/tasks/${id}`)
      .then(res => {
        return dispatch({
          type: 'DELETE_TASK',
          payload: id
        });
      })
      .catch(err => dispatch({ type: 'HAS_ERROR', payload: true }));
  };
}
