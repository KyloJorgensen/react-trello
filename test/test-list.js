'use strict';

var React = require('react'),
    TestUtils = require('react-addons-test-utils'),
    should = require('chai').should(),
    List = require('../components/list-react-component');

describe('List component', function() {
    it('Renders List of card with a Add Card From',  function() {
        var CARDS = 
            [
                {
                    text: 'card 1 content'
                },
                {
                    text: 'card 2 content'    
                }
            ];  
        var value = 1;
        var onAddInputChanged = function() {};
        var onAddSubmit = function() {};
        

        var renderer = TestUtils.createRenderer();
        renderer.render(<List cards={CARDS} onAddInputChanged={onAddInputChanged} onAddSubmit={onAddSubmit} value={value} />);
        var result = renderer.getRenderOutput();
        result.type.should.equal('div');
        result.props.className.should.equal('list');
        var cards = result.props.children[0];

        cards[0].type.should.be.a('function');
        cards[0].key.should.equal('0');
        cards[0].props.card.text.should.equal(CARDS[0].text);

        cards[1].type.should.be.a('function');
        cards[1].key.should.equal('1');
        cards[1].props.card.text.should.equal(CARDS[1].text);

        result.props.children[1].type.should.be.a('function');
        result.props.children[1].props.onAddInputChanged.should.be.a('function');
        result.props.children[1].props.onAddSubmit.should.be.a('function');
        result.props.children[1].props.value.should.equal(value);
    });
});