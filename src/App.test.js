import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import Modal from './components/Modal';
import Enzyme from 'enzyme';
import fetch from 'node-fetch';
import { exportAllDeclaration } from '@babel/types';

global.fetch = fetch;

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('debería mostrar una imagen en el modal', () => {
  const callApp = Enzyme.mount(<App />);
  const click = callApp.instance();

  click.showModal(
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY1NTMwfQ"
)

  callApp.update();
  expect(callApp.state().show).toBe('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY1NTMwfQ')
});
