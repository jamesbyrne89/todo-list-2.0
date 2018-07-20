import React from 'react';
import DeleteTask from './DeleteTask';

const Task = props => {
  return (
    <li className="task">
      <span className="task__name">{props.name}</span>
      <DeleteTask handleDeleteTask={props.handleDeleteTask} name={props.name} />
    </li>
  );
};

export default Task;
