const React = require('react');
const PropTypes = React.PropTypes;

function Todo(props) {
    return <li><p>{props.name}</p></li>;
}

Todo.propTypes = {
    name: PropTypes.string.isRequired
};

module.exports = Todo;
