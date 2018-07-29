import React, { Component } from 'react';
import './styles.min.css';
import NavBar from './components/NavBar/NavBar';
import List from './components/List/List';
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
          <List
            tasks={this.props.tasks}
            handleAddTask={this.props.addTask}
            handleDeleteTask={this.props.deleteTask}
            toggleCompleted={this.props.toggleCompleted}
            error={this.props.error}
          />
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
  fetchTasks: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
