import { createStore, combineReducers, applyMiddleware } from 'redux';
import tasks from './reducers/tasks';
import auth from './reducers/auth';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  tasks,
  auth
});

console.log(reducers);

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
