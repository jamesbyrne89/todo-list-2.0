import React from 'react';

const Task = (props) => {
    return (
        <li className="task">{props.name}</li>
    )
}

export default Task;