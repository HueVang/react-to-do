var React = require('react');
var ReactDOM = require('react-dom');
var styles= require('./styles/main.css');
var {App} = require('./components/App');
var {TodoList} = require('./components/TodoList');

ReactDOM.render(
  <TodoList />,
  document.getElementById('container')
);
