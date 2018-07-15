import React, { Component } from 'react';
import { Card } from 'react-materialize';
import uuid from 'uuid';
import Task from './Task';
import AddTask from './AddTask';
import { Modal, Button } from 'react-materialize';
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

  handleDeleteTask = id => {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) });
  };

  render() {
    const { tasks } = this.state;
    return (
      <Card>
        <ul>
          {tasks.map(task => (
            <Task
              handleDeleteTask={this.handleDeleteTask}
              key={task.id}
              id={task.id}
              name={task.name}
            />
          ))}
        </ul>
        <Modal
          header="Modal Header"
          trigger={
            <Button
              floating
              large
              className="add-task-btn"
              waves="light"
              icon="add"
            />
          }
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </Modal>
      </Card>
    );
  }
}

export default List;
