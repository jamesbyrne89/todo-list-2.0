import { createStore, compose } from 'redux';
import { rootReducer } from './reducers/index';

const defaultState = {
  tasks: [
    { name: 'Name', deadline: 'Deadline', completed: false },
    { name: 'Name', deadline: 'Deadline', completed: false },
    { name: 'Name', deadline: 'Deadline', completed: false }
  ]
};

const store = createStore(rootReducer, defaultState);
