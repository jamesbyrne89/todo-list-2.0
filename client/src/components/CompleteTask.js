import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


const CompleteTask = props => (
  <button className="complete-task-btn task-btn" onClick={props.onClick}>
   <FontAwesomeIcon icon={faCircle} />
  </button>
);

export default CompleteTask;
