const React = require('react');
const Todo = require('../components/Todo');

function TodoList(props) {
    return <ul>{props.todos.map(todo => <Todo name={todo.name} key={todo.id} />)}</ul>;
}

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired
};

module.exports = TodoList;
