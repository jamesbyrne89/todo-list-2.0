import React, { Component } from 'react';
import './styles/styles.min.css';
import NavBar from './components/NavBar';
import List from './components/List';
import { connect } from 'react-redux';

const mapStateToProps = store => {
  console.log(store);
  return store;
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: newTask => {
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
    deleteTask: task => {
      dispatch({
        type: 'DELETE_TASK',
        task
      });
    }
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
