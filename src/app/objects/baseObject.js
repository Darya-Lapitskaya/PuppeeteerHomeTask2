ph = require('../pageHolder');
class BaseObject{
  

    // async getText(element){
    //     console.log('BaseObject: get text'); 
    //     return (await((await this[element]).evaluate((node=>node.innerText))).trim());

   
    // }

    async getText(element){
        console.log('BaseObject: get text'); 
       // return (await((await this[element]).getProperty('innerText')));
        return (await this[element].getProperty('innerText'));

   
    }
}

module.exports = BaseObject;