'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    Board = require('./components/board-react-component');
    
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