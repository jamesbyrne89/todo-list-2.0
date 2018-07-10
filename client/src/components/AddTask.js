import React from 'react';
import { Button } from 'react-materialize';

const AddTask = props => {
  return (
    <Button
      floating
      large
      className="add-task-btn"
      waves="light"
      icon="add"
      onClick={props.handleAddNewTask}
    />
  );
};
export default AddTask;
