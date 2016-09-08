'use strict';

var React = require('react'),
    TestUtils = require('react-addons-test-utils'),
    should = require('chai').should(),
    Card = require('../components/card-react-component');

describe('Card component', function() {
    it('Renders the card',  function() {
        var card = {text: 'Card Content'},
            renderer = TestUtils.createRenderer();

        renderer.render(<Card card={card} />);

        var result = renderer.getRenderOutput();
        result.props.className.should.equal('card');
        result.props.children.props.children.should.equal(card.text);
    });
});