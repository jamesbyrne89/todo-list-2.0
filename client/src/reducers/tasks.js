const initialState = {
  tasks: [],
  loading: false
};

function tasks(state = initialState, { type, payload }) {
  console.log(type, payload);
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
      console.log(payload);
      return {
        ...state,
        tasks: [...tasks, payload]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: tasks.filter(task => task._id !== payload)
      };
    default:
      return { tasks: [] };
  }
}

export default tasks;
