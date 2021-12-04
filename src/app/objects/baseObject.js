class BaseObject{
    ph = require('../pageHolder');
    // async getText(element){
    //     console.log('BaseObject: get text'); 
    //    // return (await((await this[element]).getProperty('innerText')));
    //     return (await this[element].getProperty('innerText'));

    // }


    async getText(element1){
        console.log('BaseObject: get text'); 
        return (await ((await this.evaluate(element => element.textContent, element1))));

    }

    // async getText(element1){
    //     console.log('BaseObject: get text'); 
    //     return (await ((await ui.ph.page.evaluate(element => element.textContent, element1))));

    // }
}

module.exports = BaseObject;