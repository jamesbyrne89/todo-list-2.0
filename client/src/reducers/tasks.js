function tasks(state = {}, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      state = [...state, action.task];
    }
  }
  return state;
}

export default tasks;
