"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _Modal = _interopRequireDefault(require("./components/Modal"));

var _enzyme = _interopRequireDefault(require("enzyme"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _types = require("@babel/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.fetch = _nodeFetch.default;

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

it('renders without crashing', function () {
  var div = document.createElement('div');

  _reactDom.default.render(_react.default.createElement(_App.default, null), div);

  _reactDom.default.unmountComponentAtNode(div);
});
it('debería mostrar una imagen en el modal', function () {
  var callApp = _enzyme.default.mount(_react.default.createElement(_App.default, null));

  var click = callApp.instance();
  click.showModal("https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY1NTMwfQ");
  callApp.update();
  expect(callApp.state().show).toBe('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY1NTMwfQ');
});