import React, { Component } from 'react';
import { Button, Modal, Input } from 'react-materialize';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleInput = e => {
    this.setState({ input: e.target.value });
    if (e.keyCode === 13) {
      this.onSubmit();
    }
  };

  onSubmit = () => {
    this.props.handleAddNewTask({
      name: this.state.input,
      completed: false
    });
    this.setState({ input: '' });
  };

  render() {
    return (
      <Modal
        header="Add New Task"
        className="new-task-modal"
        trigger={
          <Button
            floating
            large
            className="add-task-btn"
            waves="light"
            icon="add"
          />
        }
      >
        <Input
          s={6}
          className="add-task-input"
          onKeyUp={this.handleInput}
          autoFocus
        />
      </Modal>
    );
  }
}
export default AddTask;
