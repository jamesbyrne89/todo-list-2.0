import axios from 'axios';

// Fetch tasks
export function fetchTasks() {
  return function(dispatch) {
    axios
      .get('/api/tasks')
      .then(res => {
        return dispatch({ type: 'FETCH_TASKS', payload: res.data });
      })
      .catch(err => console.log('fetchTasks error', err.message));
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
    axios
      .post('/api/tasks', task)
      .then(res => {
        return dispatch({ type: 'ADD_TASK', payload: { id: res.data } });
      })
      .catch(err => console.log('addTask error'));
  };
}

// Mark task as completed
export function toggleCompleted(id, completedState) {
  return function(dispatch) {
    axios
      .put(`/api/tasks/${id}`, { completed: completedState })
      .then(res => dispatch({ type: 'TOGGLE_COMPLETED', payload: res.data }))
      .catch(err => console.log('toggleCompleted error'));
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
      .catch(err => console.log('delTask error'));
  };
}
