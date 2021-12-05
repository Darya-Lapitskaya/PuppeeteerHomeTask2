const BasePage = require("./basePage");
const BaseObjext = require("../baseObject");
const ph = require('../../pageHolder');
ui = require('../../ui');



   

class HomePage extends BasePage {

    get getStartedBtn() {

        return (async () => {
            try {
              return (await this.ph.page.$$('.buttons_1r9m>a'))[0]
            } catch(e) {
              return 0; 
            }
          })();

    }

    get watchTalksBtn() {
        return (async () => {
            try {
              return (await this.ph.page.$$('.buttons_1r9m>a'))[1]
            } catch(e) {
              return 0; 
            }
          })();
    }

    get readTheBookBtn() {
        return (async () => {
            try {
              return (await this.ph.page.$$('.buttons_1r9m>a'))[2]
            } catch(e) {
              return 0; 
            }
          })();
    }

    get takeTheCourseBtn() {
        return (async () => {
            try {
              return (await this.ph.page.$$('.buttons_1r9m>a'))[3]
            } catch(e) {
              return 0; 
            }
          })();
    }

    get supportBtn() {
        return (async () => {
            try {
              return (await this.ph.page.$$('.buttons_1r9m>a'))[4]
            } catch(e) {
              return 0; 
            }
          })();
    }



}

module.exports = HomePage;