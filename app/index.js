const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./containers/MainContainer');

let todos = [{ name: 'Do Stuff', id: 1 }];

ReactDOM.render(<Main todos={todos} />, document.getElementById('app'));
