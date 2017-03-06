const React = require('react');
const ReactDOM = require('react-dom');
const Todo = require('./containers/TodoContainer');
const TodoInput = require('./components/TodoInput');

function Hello() {
    return <div><TodoInput /><ul><Todo name="Do stuff" /></ul></div>;
}

ReactDOM.render(<Hello />, document.getElementById('app'));
