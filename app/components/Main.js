const React = require('react');
const TodoList = require('../components/TodoList');
const TodoInput = require('../components/TodoInput');

function Main(props) {
    return (
        <div>
            <TodoInput onInputChange={props.onInputChange} onSubmitTodo={props.onSubmitTodo} />
            <TodoList todos={props.todos} />
        </div>
    );
}

module.exports = Main;
