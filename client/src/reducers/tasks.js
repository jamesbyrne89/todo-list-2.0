const initialState = {
  tasks: [],
  loading: false
};

function tasks(state = initialState, action) {
  const { tasks } = state;
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...tasks, action.newTask]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: tasks.filter(task => task.name !== action.task.name)
      };
    case 'FETCH_TASKS':
      return {};
    default:
      return { tasks: [] };
  }
}

export default tasks;
