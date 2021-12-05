const { expect } = require('chai');
const ph = require('../app/pageHolder');
const ui = require('../app/ui');
const header = require('../app/objects/controls/header');
homePage = require('../app/objects/pages/homePage');
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
      //  await ui.ph.page.waitForResponse('https://webdriver.io/img/logo-webdriver-io.png')

    });

    afterEach(async () => {
        console.log('Inside After each');
        await ui.ph.close();
    });

    it('Test2', async function () {
        console.log('START TEST');
        await ui.ph.page.waitForTimeout(2000);
        console.log('AFTER WAIT FOR RESPONCE');
        const text2 = await ui.ph.page.evaluate(element => element.textContent, await ui.header.searchField);
        console.log('AFTER GET TITLE');
        ui.expect(text2).to.equal('Search')


    });

    it('should open the main page and verify the title', async function () {

       // await ui.ph.page.waitForTimeout(2000);
        const text2 = await ui.ph.page.evaluate(element => element.textContent, await ui.homePage.getStartedBtn);
        ui.expect(text2).to.equal('Get Started');
      //  ui.expect((await ui.header.logo).isDisplayed()).to.be.true;


    });

    it('check Get Started button', async function () {
    
        // await ui.ph.page.waitForTimeout(2000);
        const text2 = await ui.ph.page.evaluate(element => element.textContent, await ui.homePage.getStartedBtn);
        ui.expect(text2).to.equal('Get Started');
    });

    it('check Watch Talks button', async function () {

        // await ui.ph.page.waitForTimeout(2000);
        const text2 = await ui.ph.page.evaluate(element => element.textContent, await ui.homePage.watchTalksBtn);
        ui.expect(text2).to.equal('Watch Talks');
    });


    it('check Read the Book button', async function () {

        // await ui.ph.page.waitForTimeout(2000);
        const text2 = await ui.ph.page.evaluate(element => element.textContent, await ui.homePage.readTheBookBtn);
        ui.expect(text2).to.equal('Read the Book');
    });


    it('check Take The Course button', async function () {

        // await ui.ph.page.waitForTimeout(2000);
        const text2 = await ui.ph.page.evaluate(element => element.textContent, await ui.homePage.takeTheCourseBtn);
        ui.expect(text2).to.equal('Take The Course');
    });


    it('check Support button', async function () {

        // await ui.ph.page.waitForTimeout(2000);
        const text2 = await ui.ph.page.evaluate(element => element.textContent, await ui.homePage.supportBtn);
        ui.expect(text2).to.equal('Support');
    });
});
