import React from 'react';
import CompleteTask from '../CompleteTask';
import DeleteTask from '../DeleteTask';

const Task = props => {
  return (
    <li
      className={props.completed ? 'task completed' : 'task'}
      onClick={() => props.onClick(props.id, !props.completed)}
    >
      <div>
        <CompleteTask onClick={() => props.handleDeleteTask(props.id)} />
        <span className="task__name">
          {props.name}
          <span className="task__strikethrough" />
        </span>
      </div>
      <span>
        <DeleteTask onClick={() => props.handleDeleteTask(props.id)} />
      </span>
    </li>
  );
};

export default Task;
