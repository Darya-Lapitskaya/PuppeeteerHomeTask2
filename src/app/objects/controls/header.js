const BaseObject = require('../baseObject');
const ph = require('../../pageHolder');
ui = require('../../ui');


class Header extends BaseObject {

  get searchField() {
    console.log('headers: get search field');
    //return this.ph.page.$('.DocSearch-Button-Placeholder');
    return this.ph.page.$('.DocSearch-Button-Placeholder');
  }


  get logo() {
    return this.ph.page.$('.navbar__logo');
  }



}

module.exports = Header;