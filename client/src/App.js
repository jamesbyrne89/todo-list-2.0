import React, { Component } from 'react';
import './styles.min.css';
import NavBar from './components/NavBar/NavBar';
import List from './components/List/List';
import Task from './components/Task/Task';
import AddTask from './components/AddTask/AddTask';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  tasksLoading,
  addTask,
  deleteTask,
  fetchTasks,
  toggleCompleted
} from './actions/actionCreators';

const mapStateToProps = store => {
  return store;
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: input => dispatch(addTask(input)),
    toggleCompleted: (id, completedState) =>
      dispatch(toggleCompleted(id, completedState)),
    deleteTask: id => dispatch(deleteTask(id)),
    fetchTasks: () => dispatch(fetchTasks()),
    tasksLoading: dispatch(tasksLoading)
  };
};

class App extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }
  render() {
    return (
      <div className="app-container">
        <NavBar title="Todo List" />
        <main className="list-container">
          <List>
            <AddTask handleAddNewTask={this.props.addTask} />
            {this.props.error ? (
              <span className="error-message">
                There was an error fetching the tasks. Please try refreshing
                your page.
              </span>
            ) : (
              <ul>
                <TransitionGroup>
                  {this.props.tasks.map(task => (
                    <CSSTransition
                      key={task._id}
                      timeout={500}
                      classNames="fade"
                    >
                      <Task
                        handleDeleteTask={this.props.deleteTask}
                        key={task._id}
                        id={task._id}
                        name={task.name}
                        completed={task.completed}
                        onClick={this.props.toggleCompleted}
                      />
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </ul>
            )}
          </List>
        </main>
      </div>
    );
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
