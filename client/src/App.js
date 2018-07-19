import React, { Component } from 'react';
import './styles/styles.min.css';
import NavBar from './components/NavBar';
import List from './components/List';
import { connect } from 'react-redux';

const mapStateToProps = store => {
  return {
    tasks: store.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: newTask => {
      console.log(newTask);
      dispatch({
        type: 'ADD_TASK',
        newTask
      });
    },
    markCompleted: id => {
      return {
        type: 'MARK_COMPLETED',
        id
      };
    },
    deleteTask: id => {
      return {
        type: 'DELETE_TASK',
        id
      };
    }
  };
};

class App extends Component {
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
