const React = require('react');
const PropTypes = React.PropTypes;

function TodoInput(props) {
    return (
        <form onChange={props.onInputChange} className="form-group">
            <input type="text" className="form-control form-inline" />
            <button type="button" onClick={props.onSubmitTodo} className="btn btn-success">
                <span className="glyphicon glyphicon-plus" />
            </button>
        </form>
    );
}

TodoInput.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    onSubmitTodo: PropTypes.func.isRequired
};

module.exports = TodoInput;
