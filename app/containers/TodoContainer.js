const React = require('react');
const Todo = require('../components/Todo');

let TodoContainer = React.createClass({
    render: function() {
        return <Todo name={this.props.name} key={this.props.id} />;
    }
});

module.exports = TodoContainer;
