import { createStore, applyMiddleware } from 'redux';
import tasks from './reducers/tasks';
import thunk from 'redux-thunk';

const store = createStore(tasks, applyMiddleware(thunk));

export default store;
