import { browser } from 'protractor';

describe('Given a SDET learning protractor', () => {
  describe('When open Google Page', () => {
    beforeEach(() => {
      browser.get('http://www.google.com');
    });

    it('then Should have a tittle', () => {
      browser.ignoreSynchronization = true;
      browser.get('http://www.google.com');
      expect(browser.getTitle()).toEqual('Google');
    });
  });
})


