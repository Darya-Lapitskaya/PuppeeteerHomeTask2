//const puppeteer = require('puppeteer');
const {expext} = require('chai');
//const pageHolder = require('../app/pageHolder');
const ui = require('../app/ui');
//const ph = require('../app/pageHolder');

describe('Puppeeteer tests', function () {

    before(async () => {
      console.log('Inside Before All');
      await ui.ph.launch();
  
     // browser = await puppeteer.launch({ headless: false });
    });

    after(() => {
      console.log('Inside after All');
      ui.ph.finish();
     // browser.close();
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
      ui.ph.page.waitForTimeout(5000);
      // await ui.ph.page.waitForResponse(resp=>{
      //   console.log('Inside wait for responce');
      //   return resp.url() === 'https://raw.githubusercontent.com/GoogleChrome/puppeteer/main/docs/api.md' && resp.status() === 200; 
      // })

      // const title = (await ui.ph.page.$$('content-box h1'))[0];
      // const text2 = (await title.evaluate((node => node.innerText))).trim();
      console.log('AFTER WAIT FOR RESPONCE');
      // console.log(`PH: ${ph}`)
      // console.log(`UI: ${ui}`)
     // console.log(`Page: ${page}`)
  
      const text2 = await ui.header.getText('title');
      console.log('AFTER GET TITLE');
      ui.expect(text2).to.equal('Puppeeteerv11.0.0Search:')


    });
  });
