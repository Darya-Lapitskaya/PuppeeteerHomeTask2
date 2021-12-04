//const puppeteer = require('puppeteer');
const { expect } = require('chai');

const ph = require('../app/pageHolder');
const ui = require('../app/ui');
const header = require('../app/objects/controls/header');
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
        await ui.ph.page.waitForTimeout(2000);
        console.log('AFTER WAIT FOR RESPONCE');
       //const text3 = await ui.header.getText('searchField');
     //  const text3 = ui.header.searchField;
        const text2 = await ui.ph.page.evaluate(element => element.textContent, await ui.header.searchField);
        console.log(text2);
        console.log('AFTER GET TITLE');
        ui.expect(text2).to.equal('Search')


    });
});
