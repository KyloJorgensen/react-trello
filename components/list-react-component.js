'use strict';

var React = require('react'),
    Card = require('./card-react-component'),
    AddCardForm = require('./addCardForm-react-component');

var List = function(props) {
    var cards = [];
    for (var i = 0; i < props.cards.length; i++) {
        cards.push(<Card card={props.cards[i]} key={i} />);
    }
    return (
        <div className="list">
            {cards}
            <AddCardForm onAddInputChanged={props.onAddInputChanged} onAddSubmit={props.onAddSubmit} value={props.value} />
        </div>
    );
};

module.exports = List;