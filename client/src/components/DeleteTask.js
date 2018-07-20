import React from 'react';

const DeleteTask = props => (
  <button
    className="del-task-btn"
    onClick={() => props.handleDeleteTask(props.name)}
  >
    Del
  </button>
);

export default DeleteTask;
