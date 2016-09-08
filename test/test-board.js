'use strict';

var React = require('react'),
    TestUtils = require('react-addons-test-utils'),
    should = require('chai').should(),
    Board = require('../components/board-react-component');

describe('Board component', function() {
    it('Renders Board, lists of cards',  function() {
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
        var title = "BOB's BIG BOARD"

        var renderer = TestUtils.createRenderer();
        renderer.render(<Board title={title} lists={LISTS} />);
        var result = renderer.getRenderOutput();
        result.type.should.equal('div');
        result.props.className.should.equal('board');
        result.props.children[0].type.should.equal('h1');
        result.props.children[0].props.children.should.equal(title);
        var lists = result.props.children[1];

        lists[0].type.should.be.a('function');
        lists[0].key.should.equal('0');
        lists[0].props.list.title.should.equal(LISTS[0].title);
        lists[0].props.list.cards[0].text.should.equal(LISTS[0].cards[0].text);
        lists[0].props.list.cards[1].text.should.equal(LISTS[0].cards[1].text);
        
        lists[1].type.should.be.a('function');
        lists[1].key.should.equal('1');
        lists[1].props.list.title.should.equal(LISTS[1].title);
        lists[1].props.list.cards[0].text.should.equal(LISTS[1].cards[0].text);
        lists[1].props.list.cards[1].text.should.equal(LISTS[1].cards[1].text);
    });
});