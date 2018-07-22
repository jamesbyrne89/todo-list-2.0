import React from 'react';

const DeleteTask = props => (
  <button className="del-task-btn" onClick={props.onClick}>
    Del
  </button>
);

export default DeleteTask;
