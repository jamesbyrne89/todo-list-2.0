import React, { Component } from 'react';
import { Card } from 'react-materialize';
import uuid from 'uuid';
import Task from './Task';
import AddTask from './AddTask';
class List extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: uuid(), name: 'Buy milk' },
        { id: uuid(), name: 'Walk dog' }
      ]
    };
  }

  handleAddNewTask = () => {
    const name = prompt('Add new task');
    const { tasks } = this.state;
    if (name && name.trim().length > 0) {
      this.setState({ tasks: [...tasks, { id: uuid(), name }] });
    }
  };

  handleDeleteTask = (id) => {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) })
  }

  render() {
    const { tasks } = this.state;
    return (
      <Card>
        <ul>
          {tasks.map(task => <Task handleDeleteTask={this.handleDeleteTask} key={task.id} id={task.id} name={task.name} />)}
        </ul>
        <AddTask handleAddNewTask={this.handleAddNewTask} />
      </Card>
    );
  }
}

export default List;
