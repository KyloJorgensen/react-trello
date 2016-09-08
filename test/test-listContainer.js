'use strict';

var React = require('react'),
    TestUtils = require('react-addons-test-utils'),
    should = require('chai').should(),
    ListContainer = require('../components/listContainer-react-component');

describe('ListContainer component', function() {
    it('Renders ListContainer of a list',  function() {
        var LIST = {
                title: 'yeah', 
                cards: [
                    {
                        text: "hwfafasd"
                    }, 
                    {
                        text: "asdfasfa"
                    }
                ]
            };
        var renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer list={LIST} />);
        var result = renderer.getRenderOutput();
        
        result.type.should.equal('div');
        result.props.className.should.equal('list-container');
        result.props.children[0].type.should.equal('h1');
        result.props.children[0].props.children.should.equal('yeah');
        result.props.children[1].type.should.be.a('function');
        result.props.children[1].props.cards[0].text.should.equal(LIST.cards[0].text);
        result.props.children[1].props.cards[1].text.should.equal(LIST.cards[1].text);
        result.props.children[1].props.onAddInputChanged.should.be.a('function');
        result.props.children[1].props.onAddSubmit.should.be.a('function');
        result.props.children[1].props.value.should.equal('');
    });
});