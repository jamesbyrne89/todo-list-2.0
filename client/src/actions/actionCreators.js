import axios from 'axios';

// Fetch tasks

export const taskActions = {
  fetch: () => dispatch => {
    axios
      .get('/api/tasks')
      .then(res => {
        dispatch({ type: 'HAS_ERROR', payload: false });
        dispatch({ type: 'FETCH_TASKS', payload: res.data });
      })
      .catch(err => dispatch({ type: 'HAS_ERROR', payload: true }));
  },
  // Handle loading state
  isLoading: () => {
    return {
      type: 'TASKS_LOADING',
      payload: { loading: true }
    };
  },
  // Create a new task
  add: task => dispatch => {
    dispatch({ type: 'TASKS_LOADING', payload: true });
    axios
      .post('/api/tasks', task)
      .then(res => {
        dispatch({ type: 'HAS_ERROR', payload: false });
        dispatch({ type: 'ADD_TASK', payload: res.data });
        dispatch({ type: 'TASKS_LOADING', payload: false });
      })
      .catch(err => dispatch({ type: 'HAS_ERROR', payload: true }));
  },
  // Mark task as completed
  toggleCompleted: (id, completedState) => dispatch => {
    axios
      .put(`/api/tasks/${id}`, { completed: completedState })
      .then(res => {
        dispatch({ type: 'HAS_ERROR', payload: false });
        dispatch({ type: 'TOGGLE_COMPLETED', payload: res.data });
      })
      .catch(err => dispatch({ type: 'HAS_ERROR', payload: true }));
  },
  // Delete task
  delete: id => dispatch => {
    axios
      .delete(`/api/tasks/${id}`)
      .then(res => {
        return dispatch({
          type: 'DELETE_TASK',
          payload: id
        });
      })
      .catch(err => dispatch({ type: 'HAS_ERROR', payload: true }));
  }
};

export const authActions = {
  login: task => dispatch => {
    dispatch({ type: 'LOGGING_IN', payload: true });
    axios
      .post('/api/tasks', task)
      .then(res => {
        dispatch({ type: 'HAS_ERROR', payload: false });
        dispatch({ type: 'ADD_TASK', payload: res.data });
        dispatch({ type: 'TASKS_LOADING', payload: false });
      })
      .catch(err => dispatch({ type: 'HAS_ERROR', payload: true }));
  },
  logout: () => ({ type: 'LOGOUT', payload: false })
};
