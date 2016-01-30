import 'should';
import Input from '../src/index.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
mocha.ui('bdd');
describe('test', function() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  it('Should render', function() {
    let cp = ReactDOM.render(<Input/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Input);
    ReactDOM.findDOMNode(cp).getAttribute('class').should.be.eql('ra-input default');
  });
  it('Should render skin success', function() {
    let cp = ReactDOM.render(<Input skin="success"/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Input);
    ReactDOM.findDOMNode(cp).getAttribute('class').should.be.eql('ra-input success');
  });
  it('Should render skin error', function() {
    let cp = ReactDOM.render(<Input skin="error"/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Input);
    ReactDOM.findDOMNode(cp).getAttribute('class').should.be.eql('ra-input error');
  });
  it('Should render disabled', function() {
    let cp = ReactDOM.render(<Input disabled/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Input);
    ReactDOM.findDOMNode(cp).getAttribute('class').should.be.eql('ra-input default disabled');
  });
});
if (window.mochaPhantomJS) {
  window.mochaPhantomJS.run();
} else {
  mocha.run();
}
