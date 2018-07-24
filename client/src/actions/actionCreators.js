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
        return dispatch({ type: 'ADD_TASK', payload: res.data });
      })
      .catch(err => console.log('addTask error'));
  };
}

// Mark task as completed
export function markCompleted(id) {
  return function(dispatch) {
    console.log(id)
    axios
      .put(`/api/tasks/${id}`)
      .then(res => {
        return dispatch({ type: 'MARK_COMPLETED', payload: res.data });
      })
      .catch(err => console.log('markCompleted error'));
  };
}

// Mark task as uncompleted
export function markUncompleted(id) {
  return function(dispatch) {
    console.log(id)
    axios
      .put(`/api/tasks/${id}`)
      .then(res => {
        return dispatch({ type: 'MARK_UNCOMPLETED', payload: res.data });
      })
      .catch(err => console.log('markUncompleted error'));
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
