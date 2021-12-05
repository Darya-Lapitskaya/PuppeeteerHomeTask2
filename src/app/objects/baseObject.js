class BaseObject {
    ph = require('../pageHolder');


    // async getText(element){
    //     console.log('BaseObject: get text'); 
    //     return (await((await this[element]).evaluate(node => node.innerText))).trim();

    //    // const text2 = await ui.ph.page.evaluate(element => element.textContent, await ui.header.searchField);
    // }

    async getText(element) {
        return (await this.ph.page.evaluate(node => node.textContent, await this[element])).trim();
    }


}

module.exports = BaseObject;