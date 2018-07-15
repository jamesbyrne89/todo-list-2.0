import React, { Component } from 'react';
import './styles/styles.min.css';
import NavBar from './components/NavBar';
import List from './components/List';
import NewTaskModal from './components/Modal';
import AddTask from './components/AddTask';
import { connect } from 'react-redux';

const mapStateToProps = store => {
  return {
    tasks: store.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: () => {
      dispatch({
        type: 'ADD_TASK'
      });
    }
  };
};

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NavBar />
        <main className="list-container">
          <List />
        </main>
        <NewTaskModal trigger={AddTask} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
