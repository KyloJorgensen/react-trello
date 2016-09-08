'use strict';

var React = require('react'),
    ListContainer = require('./listContainer-react-component');
    
var Board = function(props) {
    
    var board = [];
    for (var i=0; i<props.lists.length; i++) {
        board.push(<ListContainer list={props.lists[i]} key={i} />);
    }
    return (
        <div className="board">
            <h1>{props.title}</h1>
            {board}
        </div>
    );
};

module.exports = Board;