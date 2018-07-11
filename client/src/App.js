import React, { Component } from 'react';
import './styles.css';
import NavBar from './components/NavBar';
import List from './components/List';
import NewTaskModal from './components/Modal';
import AddTask from './components/AddTask';

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

export default App;
