const React = require('react');
const Main = require('../components/Main');

let MainContainer = React.createClass({
    getInitialState: () => {
        return { newTodo: '', todos: [] };
    },
    componentDidMount: function() {
        this.setState({
            todos: this.props.todos
        });
    },
    handleInputChange: function(e) {
        this.setState({
            newTodo: e.target.value
        });
    },
    handleSubmitTodo: function(e) {
        this.state.todos.push({
            name: this.state.newTodo,
            id: this.state.todos.slice(-1)[0].id + 1
        });
        console.log(this.state.todos);
    },
    render: function() {
        return (
            <Main
                todos={this.state.todos}
                onSubmitTodo={this.handleSubmitTodo}
                onInputChange={this.handleInputChange}
            />
        );
    }
});

module.exports = MainContainer;
