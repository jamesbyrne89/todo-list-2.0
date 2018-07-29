import React, { Component } from 'react';
import { Card } from 'react-materialize';
import Task from '../Task/Task';
import AddTask from '../AddTask/AddTask';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class List extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { tasks } = this.props;
    return (
      <Card>
        <AddTask handleAddNewTask={this.props.handleAddTask} />
        <ul>
          <TransitionGroup>
            {tasks.map(task => (
              <CSSTransition key={task._id} timeout={500} classNames="fade">
                <Task
                  handleDeleteTask={this.props.handleDeleteTask}
                  key={task._id}
                  id={task._id}
                  name={task.name}
                  completed={task.completed}
                  onClick={this.props.toggleCompleted}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      </Card>
    );
  }
}

export default List;
