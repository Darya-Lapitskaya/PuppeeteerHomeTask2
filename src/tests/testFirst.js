const puppeteer = require('puppeteer');
const {expect}  = require('chai');

// //const pageHolder = require('../app/pageHolder');
// const ui = require('../app/ui');
// //const ph = require('../app/pageHolder');

describe('SIMPLE TESTS', function () {

    before(async () => {
        console.log('Inside Before All');
        // const browser = await puppeteer.launch();
        browser = await puppeteer.launch({ headless: false });

    });

    after(() => {
        browser.close();
    });

    beforeEach(async () => {
        console.log('Inside Before each');
        page = await browser.newPage();
        await page.goto('https://webdriver.io/');

    });

    afterEach(async () => {
        console.log('Inside After each');
     await page.close();
    });

    it('Test2', async function () {
        console.log('START TEST');
    await page.waitForTimeout(10000);

        // const title = (await ui.ph.page.$$('content-box h1'))[0];
        // const text2 = (await title.evaluate((node => node.innerText))).trim();
        console.log('AFTER WAIT FOR RESPONCE');


    //    async function getStartedBtn() {
    //         return page.$$('.buttons_1r9m>a')[0];
    //     }

        const element1 = await page.$('.DocSearch-Button-Placeholder');
        const text2 = await page.evaluate(element => element.textContent, element1);
       // const element = await page.$$(('.buttons_1r9m>a')[0]);
       // let text2 = element.getProperty('innerText');
        //const text2 = await ui.header.getText('element');
        console.log('AFTER GET TITLE');
        expect(text2).to.equal('Search')


    });
});
