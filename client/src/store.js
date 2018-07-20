import { createStore } from 'redux';
import tasks from './reducers/tasks';

const defaultState = {
  tasks: []
};

const store = createStore(tasks, defaultState);

export default store;
