import React, { Component } from 'react';
import './styles/styles.min.css';
import NavBar from './components/NavBar';
import List from './components/List';
import propTypes from 'prop-types';
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
    toggleCompleted: (id, completedState) => dispatch(toggleCompleted(id, completedState)),
    deleteTask: id => dispatch(deleteTask(id)),
    fetchTasks: () => dispatch(fetchTasks()),
    tasksLoading: dispatch(tasksLoading)
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchTasks();
  }
  render() {
    return (
      <div className="app-container">
        <NavBar />
        <main className="list-container">
          <List
            tasks={this.props.tasks}
            handleAddTask={this.props.addTask}
            handleDeleteTask={this.props.deleteTask}
            toggleCompleted={this.props.toggleCompleted}
          />
        </main>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
