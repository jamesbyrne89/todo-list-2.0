import React, { Component } from 'react';
import './styles.css';
import NavBar from './components/NavBar';
import List from './components/List';
import AddTask from './components/AddTask';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NavBar />
        <main className="list-container">
          <List />
          <AddTask />
        </main>
      </div>
    );
  }
}

export default App;
