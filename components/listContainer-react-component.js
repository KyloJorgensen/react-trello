'use strict';

var React = require('react'),
    List = require('./list-react-component');

var ListContainer = React.createClass({
    getInitialState: function() {
        return {
            cards: this.props.list.cards,
            value: ''
        }
    },
    onAddInputChanged: function(event) {
        this.setState({
            value: event.target.value
        });
    },
    onAddSubmit: function(event) {
        event.preventDefault();
        this.setState({
            cards: this.state.cards.concat({text: this.state.value}),
            value: ''
        });
    },
    render: function() {
        return (
            <div className="list-container">
                <h1>{this.props.list.title}</h1>
                <List cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} value={this.state.value} />
            </div>
        );
    }
});

module.exports = ListContainer;