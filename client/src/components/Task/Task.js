import React from 'react';
import DeleteTask from '../DeleteTask';

const Task = props => {
  return (
    <li
      className="task"
      onClick={() => props.onClick(props.id, !props.completed)}
    >
      <span className="task__name">{props.name}</span>
      <span
        className={
          props.completed
            ? 'task__strikethrough completed'
            : 'task__strikethrough'
        }
      />
      <DeleteTask onClick={() => props.handleDeleteTask(props.id)} />
    </li>
  );
};

export default Task;
