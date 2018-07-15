import React from 'react';
import { Modal } from 'react-materialize';
import AddTask from './AddTask';

const NewTaskModal = () => <Modal trigger={<AddTask />} />;

export default NewTaskModal;
