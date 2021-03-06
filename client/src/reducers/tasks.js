const initialState = {
  tasks: [],
  loading: false,
  error: false
};

function tasks(state = initialState, { type, payload }) {
  const { tasks } = state;
  switch (type) {
    case 'FETCH_TASKS':
      return {
        ...state,
        tasks: payload,
        loading: false
      };
    case 'TASKS_LOADING': {
      return {
        ...state,
        loading: payload
      };
    }
    case 'HAS_ERROR': {
      return {
        ...state,
        error: payload
      };
    }
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...tasks, payload]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: tasks.filter(task => task._id !== payload)
      };
    case 'TOGGLE_COMPLETED':
      return {
        ...state,
        tasks: tasks.map(task => {
          if (task._id === payload) {
            task.completed = !task.completed;
          }
          return task;
        })
      };
    default:
      return state;
  }
}

export default tasks;
