import { browser } from 'protractor';

describe('Given a SDET learning protractor', () => {
  describe('When open Google Page', () => {
    beforeEach(async () => {
      await browser.get('http://www.google.com');
    });

    it('then Should have a tittle', async () => {
      await expect(browser.getTitle()).toEqual('Google');
    });
  });
})
