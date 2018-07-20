import React, { Component } from 'react';
import { Card } from 'react-materialize';
import Task from './Task';
import AddTask from './AddTask';

class List extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleAddNewTask = input => {
    this.props.handleAddTask(input);
  };

  handleDeleteTask = id => {};

  render() {
    const { tasks } = this.props;
    console.log(tasks);
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

        <AddTask handleAddNewTask={this.handleAddNewTask} />
      </Card>
    );
  }
}

export default List;
