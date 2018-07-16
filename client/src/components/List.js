import React, { Component } from 'react';
import { Card } from 'react-materialize';
import uuid from 'uuid';
import Task from './Task';
import AddTask from './AddTask';
import { Modal, Button, Input, Row } from 'react-materialize';
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
          header="Add New Task"
          className="new-task-modal"
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
          <Input
            s={6}
            className="add-task-input"
            onSubmit={() => console.log('Hi!')}
            autofocus
          />
        </Modal>
      </Card>
    );
  }
}

export default List;
