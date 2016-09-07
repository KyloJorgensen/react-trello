var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {
    return (
        <div className="card">
            <div className="card-content">
                {props.card.text}
            </div>
        </div>
    );
};

var AddCardForm = function(props) {
    return (
        <form onSubmit={props.onAddSubmit}>
            <input type="text" value={props.value} onChange={props.onAddInputChanged} />
            <input type="submit" />
        </form>
    );
};

var List = function(props) {
    var cards = [];
    for (var i = 0; i < props.cards.length; i++) {
        cards.push(<Card card={props.cards[i]} />);
    }
    return (
        <div className="list">
            {cards}
            <AddCardForm onAddInputChanged={props.onAddInputChanged} onAddSubmit={props.onAddSubmit} value={props.value} />
        </div>
    );
};

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

var Board = function(props) {
    var board = [];
    for (var i=0; i<props.lists.length; i++) {
        board.push(<ListContainer list={props.lists[i]} />);
    }
    return (
        <div className="board">
            <h1>{props.title}</h1>
            {board}
        </div>
    );
};

var LISTS = [
    {
        title: 'yeah', 
        cards: [
            {
                text: "hwfafasd"
            }, 
            {
                text: "asdfasfa"
            }
        ]
    }, 
    {
        title: 'boo',
        cards: [
            {
                text: "hwfafasd"
            }, 
            {
                text: "asdfasfa"
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="BOB's Big Board" lists={LISTS} />, document.getElementById('app'));
});