import renderer from 'react-test-renderer';
import taskActions from './actionCreators';

test('Dispatches action to update loading state', () => {
    console.log(taskActions.isLoading())
    expect(taskActions.isLoading()).toEqual({
        type: 'TASKS_LOADING',
        payload: { loading: true }
      })
})