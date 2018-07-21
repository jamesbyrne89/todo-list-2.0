const initialState = {
  tasks: [],
  loading: false
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
        loading: payload.loading
      };
    }
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...tasks, payload.newTask]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: tasks.filter(task => task.name !== payload.task.name)
      };

    default:
      return { tasks: [] };
  }
}

export default tasks;
