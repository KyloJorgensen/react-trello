var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
    render: function() {
        var job = 'This is a card';
        return (
            <div className="card">
                <div className="card-content">
                    {job}
                    <p>Hello</p>
                </div>
            </div>
        );
    }
});

var CardList = React.createClass({
    render: function() {
        var cards = [];
        for (var i=0; i<3; i++) {
            cards.push(<Card />);
        }
        return (
            <div className="card-list">
                {cards}
            </div>
        );
    }
});

var Board = React.createClass({
    render: function() {
        var board = [];
        for (var i=0; i<3; i++) {
            board.push(<CardList />);
        }
        return (
            <div className="card-list">
                {board}
            </div>
        );
    }
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});