import React, { Component, Fragment } from 'react';
import './styles.min.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import List from './components/List/List';
import Task from './components/Task/Task';
import AddTask from './components/AddTask/AddTask';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { taskActions } from './actions/actionCreators';

const mapStateToProps = store => {
  return store;
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: input => dispatch(taskActions.add(input)),
    toggleCompleted: (id, completedState) =>
      dispatch(taskActions.toggleCompleted(id, completedState)),
    deleteTask: id => dispatch(taskActions.delete(id)),
    fetchTasks: () => dispatch(taskActions.fetch()),
    tasksLoading: dispatch(taskActions.isLoading)
  };
};

const ProtectedRoute = ({
  component: Component,
  authenticated,
  ...otherProps
}) => (
  <Route
    {...otherProps}
    render={props =>
      authenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

class App extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar title="Todo List" />
          <Switch>
            <div className="app-container">
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <ProtectedRoute exact path="/" component={List} />
            </div>
          </Switch>
        </Fragment>
      </Router>
    );

    //   <NavBar title="Todo List" />
    //   <main className="list-container">
    //     <List>
    //       <AddTask handleAddNewTask={this.props.addTask} />
    //       {this.props.error ? (
    //         <span className="error-message">
    //           There was an error fetching the tasks. Please try refreshing
    //           your page.
    //         </span>
    //       ) : (
    //         <ul>
    //           <TransitionGroup>
    //             {this.props.tasks.map(task => (
    //               <CSSTransition
    //                 key={task._id}
    //                 timeout={500}
    //                 classNames="fade"
    //               >
    //                 <Task
    //                   handleDeleteTask={this.props.deleteTask}
    //                   key={task._id}
    //                   id={task._id}
    //                   name={task.name}
    //                   completed={task.completed}
    //                   onClick={this.props.toggleCompleted}
    //                 />
    //               </CSSTransition>
    //             ))}
    //           </TransitionGroup>
    //         </ul>
    //       )}
    //     </List>
    //   </main>
    // );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  addTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  fetchTasks: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
