import React from 'react';
import { Button } from 'react-materialize';

const AddTask = () => {
  const handleAddNewTask = () => {
    prompt('Add new task')
  };
  return (
    <Button floating large className="add-task-btn" waves="light" icon="add" onClick={handleAddNewTask} />
  );
};
export default AddTask;
