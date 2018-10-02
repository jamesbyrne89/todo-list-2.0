import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import NavBar from './components/NavBar/NavBar';
import { Provider } from 'react-redux';
import store from './store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test('snapshot', () => {
  const nav = renderer.create(<NavBar />);
  expect(nav.toJSON()).toMatchSnapshot();
});
