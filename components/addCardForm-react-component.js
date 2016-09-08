'use strict';

var React = require('react');

var AddCardForm = function(props) {
    return (
        <form className="addCardForm" onSubmit={props.onAddSubmit}>
            <input type="text" value={props.value} onChange={props.onAddInputChanged} />
            <input type="submit" />
        </form>
    );
};

module.exports = AddCardForm;