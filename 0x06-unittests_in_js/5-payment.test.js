const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  // Set up the spy using beforeEach, and tear it down using afterEach
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore(); // Restore the original console.log after each test
  });

  it('should log "The total is: 120" and call console.log once with inputs 100, 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify the console.log output
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" and call console.log once with inputs 10, 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify the console.log output
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
