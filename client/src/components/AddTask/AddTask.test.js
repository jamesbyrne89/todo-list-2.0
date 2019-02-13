import React from 'react';
import renderer from 'react-test-renderer';
import AddTask from './AddTask'

test('Clears input on submit', () => {
    const AddTask = renderer.create(<AddTask />);
    const instance = AddTask.getInstance();
    instance.onSubmit();
    expect(instance.state.input).toEqual('');
})