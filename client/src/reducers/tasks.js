function tasks(state = {}, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      state = [...state, action.newTask];
    }
  }
  return state;
}

export default tasks;
