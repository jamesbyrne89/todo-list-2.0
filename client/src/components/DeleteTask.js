import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const DeleteTask = props => (
  <button className="del-task-btn task-btn" onClick={props.onClick}>
   <FontAwesomeIcon icon={faTrashAlt} />
  </button>
);

export default DeleteTask;
