var React = require('react');
var ReactDOM = require('react-dom');
var {App} = require('./components/App');
var styles= require('./styles/main.css');

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
