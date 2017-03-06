const React = require('react');
const TodoInput = require('../components/TodoInput');

let TodoInputContainer = React.createClass({
    render: function() {
        return (
            <TodoInput
                onInputChange={this.props.onInputChange}
                onSubmitTodo={this.props.onSubmitTodo}
            />
        );
    }
});

module.exports = TodoInputContainer;
