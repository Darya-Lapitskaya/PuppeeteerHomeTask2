const BaseObject = require('../baseObject');



class Header extends BaseObject{
     ph = require('../../pageHolder');
      get title() {
        console.log('headers: get title'); 
        //return this.ph.page.$('app-title')}

       return this.ph.page.$$('.buttons_1r9m>a')[0]}

}

module.exports = Header;