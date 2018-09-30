import { createStore, applyMiddleware } from 'redux';
import tasks from './reducers/tasks';
import thunk from 'redux-thunk';

const store = createStore(
  tasks,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
