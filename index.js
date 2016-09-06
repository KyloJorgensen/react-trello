var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
    render: function() {
        return (
            <div className="card">
                <div className="card-content">
                    {this.props.card.text}
                </div>
            </div>
        );
    }
});

var AddCardForm = React.createClass({
    getInitialState: function() {
        return {value: ''};
    },
    onChange: function(event) {
        this.setState({value: event.target.value});
        this.props.change(event);
    },
    onSubmit: function(event) {
        event.preventDefault();
        this.props.submit(event);
        this.setState({value: ''});
    },
    render: function() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.value} onChange={this.onChange} placeholder="type here" />
                <input type="submit" />
            </form>
        );
    }
});

var CardList = React.createClass({
    getInitialState: function() {
        return this.props.list;
    },
    onAddSubmit: function() {
        this.setState({
            cards: this.state.cards.concat({text: this.state.value})
        });
    },
    onAddInputChanged: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        var cards = [];
        for (var i=0; i<this.state.cards.length; i++) {
            cards.push(<Card card={this.state.cards[i]} />);
        }
        return (
            <div className="card-list">
                <h1>{this.state.title}</h1>
                {cards}
                <AddCardForm submit={this.onAddSubmit} change={this.onAddInputChanged} />
            </div>
        );
    }
});

var Board = React.createClass({
    render: function() {
        console.log(this.props.lists);
        var board = [];
        for (var i=0; i<this.props.lists.length; i++) {
            board.push(<CardList list={this.props.lists[i]} />);
        }
        return (
            <div className="board">
                <h1>{this.props.title}</h1>
                {board}
            </div>
        );
    }
});

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

var StateBoard = function() {
    return (
        <div className="boards">
            <Board title="BOB's Big Board" lists={LISTS}/>
        </div>
    );
};

// var SoundCloudEmbed = function(props) {
//     var playerUrl = 'https://w.soundcloud.com/player/';
//     var trackUrl = 'https://api.soundcloud.com/tracks/' + props.trackId;
//     var options = 'auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true';
//     var src = playerUrl + '?url=' + trackUrl + '&' + options;
//     return <iframe width="100%" height="450" scrolling="no" frameborder="no" src={src}></iframe>;
// };

// var Button = function(props) {
//     return <button onClick={props.onClick}>{props.text}</button>;
// };

// var Surprise = React.createClass({
//     getInitialState: function() {
//         return {
//             clicked: false
//         };
//     },
//     onButtonClick: function() {
//         this.setState({
//             clicked: true
//         });
//     },
//     render: function() {
//         return (
//             <div>
//                 <Button onClick={this.onButtonClick} text="Ready to be amazed?" />
//                 {this.state.clicked ? <SoundCloudEmbed trackId="191075550" /> : null}
//             </div>
//         );
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(<Surprise />, document.getElementById('app'));
// });

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<StateBoard />, document.getElementById('app'));
});