import React, { Component } from 'react';
import './styles/styles.min.css';
import NavBar from './components/NavBar';
import List from './components/List';
import { connect } from 'react-redux';
import {
  addTask,
  deleteTask,
  fetchTasks,
  markCompleted
} from './actions/actionCreators';

const mapStateToProps = store => {
  return store;
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: dispatch(addTask),
    markCompleted: dispatch(markCompleted),
    deleteTask: dispatch(deleteTask),
    fetchTasks: dispatch(fetchTasks)
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app-container">
        <NavBar />
        <main className="list-container">
          <List tasks={this.props.tasks} handleAddTask={this.props.addTask} />
        </main>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
