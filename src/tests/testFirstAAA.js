const puppeteer = require('puppeteer');
const {expect}  = require('chai');

const pageHolder = require('../app/pageHolder');
const ui = require('../app/ui');
// //const ph = require('../app/pageHolder');

describe('SIMPLE TESTS2222', function () {

    before(async () => {
        console.log('Inside Before All');
      await ui.ph.launch();

    });

    after(() => {
        console.log('Inside after All');
        ui.ph.finish();
    });

    beforeEach(async () => {
        console.log('Inside Before each');
      await ui.ph.create();
      await ui.ph.page.goto('https://webdriver.io/');

    });

    afterEach(async () => {
        console.log('Inside After each');
     await ui.ph.close();
    });

    it('Test2', async function () {
        console.log('START TEST');
    await ui.ph.page.waitForTimeout(10000);

        // const title = (await ui.ph.page.$$('content-box h1'))[0];
        // const text2 = (await title.evaluate((node => node.innerText))).trim();
        console.log('AFTER WAIT FOR RESPONCE');


    //    async function getStartedBtn() {
    //         return page.$$('.buttons_1r9m>a')[0];
    //     }

        const element1 = await ui.ph.page.$('.DocSearch-Button-Placeholder');
        const text2 = await ui.ph.page.evaluate(element => element.textContent, element1);
       // const element = await page.$$(('.buttons_1r9m>a')[0]);
       // let text2 = element.getProperty('innerText');
        //const text2 = await ui.header.getText('element');
        console.log('AFTER GET TITLE');
        ui.expect(text2).to.equal('Search')


    });
});
