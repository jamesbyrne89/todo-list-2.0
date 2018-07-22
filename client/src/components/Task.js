import React from 'react';
import DeleteTask from './DeleteTask';

const Task = props => {
  return (
    <li className="task">
      <span className="task__name">{props.name}</span>
      <span className="task__name">
        {props.completed ? 'Completed' : 'Not yet completed'}
      </span>
      <DeleteTask onClick={() => props.handleDeleteTask(props.id)} />
    </li>
  );
};

export default Task;
