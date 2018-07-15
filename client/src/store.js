import { createStore } from 'redux';
import tasks from './reducers/tasks';

const defaultState = {
  tasks: [
    { name: 'Name', deadline: 'Deadline', completed: false },
    { name: 'Name', deadline: 'Deadline', completed: false },
    { name: 'Name', deadline: 'Deadline', completed: false }
  ]
};

const store = createStore(tasks, defaultState);

export default store;
