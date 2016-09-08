'use strict';

var React = require('react');

var Card = function(props) {
    return (
        <div className="card">
            <div className="card-content">
                {props.card.text}
            </div>
        </div>
    );
};

module.exports = Card;