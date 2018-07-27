import React from 'react';
import CompleteTask from '../CompleteTask';
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
      <span>
      <CompleteTask onClick={() => props.handleDeleteTask(props.id)} />
      <DeleteTask onClick={() => props.handleDeleteTask(props.id)} />
      </span>
    </li>
  );
};

export default Task;
