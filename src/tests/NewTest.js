//const expect = require('chai');
const ph = require('../app/pageHolder');
const ui = require('../app/ui');
const header = require('../app/objects/controls/header');
homePage = require('../app/objects/pages/homePage');

describe('Test suite for main page', function () {

    before(async () => {
        await ui.ph.launch();
    });

    after(() => {
        ui.ph.finish();
    });

    beforeEach(async () => {
        await ui.ph.create();
        await ui.ph.page.goto('https://webdriver.io/');
        ui.ph.page.waitForResponse('https://webdriver.io/img/logo-webdriver-io.png');

    });

    afterEach(async () => {
        await ui.ph.close();
    });

    it('should check Search field name', async function () {
        const elementText = await ui.header.getText('searchField');
        ui.expect(elementText).to.equal('Search');

    });

    it('should check subtitle on the main page', async function () {
        const elementText = await ui.header.getText('subTitle');
        ui.expect(elementText).to.equal('Next-gen browser and mobile automation test framework for Node.js');


    });

    it('check Get Started button', async function () {
        const elementText = await ui.homePage.getText('getStartedBtn');
        ui.expect(elementText).to.equal('Get Started');
    });

    it('check Watch Talks button', async function () {
        const elementText = await ui.homePage.getText('watchTalksBtn');
        ui.expect(elementText).to.equal('Watch Talks');
    });


    it('check Read the Book button', async function () {
        const elementText = await ui.homePage.getText('readTheBookBtn');
        ui.expect(elementText).to.equal('Read the Book');
    });


    it('check Take The Course button', async function () {
        const elementText = await ui.homePage.getText('takeTheCourseBtn');
        ui.expect(elementText).to.equal('Take The Course');
    });


    it('check Support button', async function () {
        const elementText = await ui.homePage.getText('supportBtn');
        ui.expect(elementText).to.equal('Support');
    });


});
