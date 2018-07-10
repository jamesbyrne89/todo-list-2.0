import React from 'react';
import DeleteTask from './DeleteTask';

const Task = props => {
  return (
    <li className="task">
      <span className="task__name">{props.name}</span>
      <DeleteTask handleDeleteTask={props.handleDeleteTask} id={props.id} />
    </li>
  );
};

export default Task;
