const Header = require('./objects/controls/header');
const HomePage = require('../app/objects/pages/homePage');
const chai = require('chai');

class Ui {
    #ph = require('./pageHolder');

    get ph() {
        return this.#ph;
    }

    get expect() {
        return chai.expect;
    }

    cache = {};

    get header() {
        if (this.cache[Header.toString()]) {
            return this.cache[Header.toString()];
        }
        let obj = new Header();
        this.cache[Header.toString()] = obj;
        return obj;

    }

    get homePage() {
        if (this.cache[HomePage.toString()]) {
            return this.cache[HomePage.toString()];
        }
        let obj = new HomePage();
        this.cache[HomePage.toString()] = obj;
        return obj;

    }
}

module.exports = new Ui();