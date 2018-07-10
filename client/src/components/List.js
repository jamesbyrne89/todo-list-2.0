import React, { Component } from 'react';
import { Card } from 'react-materialize';
import uuid from 'uuid';
import Task from './Task';

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
  render() {
    const { tasks } = this.state;
    return (
      <Card>
        The tasks list goes here.<ul>
          {tasks.map(task => <Task key={task.id} name={task.name}></Task>)}
        </ul>
      </Card>
    );
  }
}

export default List;
