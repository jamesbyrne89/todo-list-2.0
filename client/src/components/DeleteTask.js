import React from 'react';

const DeleteTask = (props) => (
    <button className="del-task-btn" onClick={() => props.handleDeleteTask(props.id)}>Del</button>
)

export default DeleteTask