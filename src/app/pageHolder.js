const puppeteer = require("puppeteer");

class PageHolder {
   
    #page = null;
    #browser = null;
    
    get page() {
        console.log('PH: get page'); 
        return this.#page;
    }

    get browser() {
        console.log('PH: get browser'); 
        return this.#browser;
    }

    async launch() {
        console.log('PH: launch'); 
        this.#browser = await puppeteer.launch({ headless: false })
    }

    async create() {
        console.log('PH: create'); 
        this.#page = await this.#browser.newPage();
    }

    // async wait(ms) {
    //     this.#browser = await this.#browser.wait(ms);
    // }

    async close() {
        console.log('PH: close'); 
        this.#page.close();
    }
    async finish() {
        console.log('PH: finish'); 
        this.#browser.close();
    }
}

module.exports = new PageHolder();