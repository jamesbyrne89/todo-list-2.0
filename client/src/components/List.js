import React, { Component } from 'react';
import { Card } from 'react-materialize';
import Task from './Task';
import AddTask from './AddTask';

class List extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { tasks } = this.props;
    console.log(tasks);
    return (
      <Card>
        <ul>
          {tasks.map(task => (
            <Task
              handleDeleteTask={this.props.handleDeleteTask}
              key={task._id}
              id={task._id}
              name={task.name}
              completed={task.completed}
              onClick={this.props.toggleCompleted}
            />
          ))}
        </ul>

        <AddTask handleAddNewTask={this.props.handleAddTask} />
      </Card>
    );
  }
}

export default List;
