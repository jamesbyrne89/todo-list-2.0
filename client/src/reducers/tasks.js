function tasks(state = [], action) {
  const { tasks } = state;
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...tasks, action.newTask] };
      break;
    case 'DELETE_TASK':
      return { tasks: tasks.filter(task => task.name !== action.task.name) };
      break;
    default:
      return { tasks: [] };
  }
  console.log(state);
  return state;
}

export default tasks;
