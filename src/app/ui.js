const Header = require('./objects/controls/header');
const HomePage = require('../app/objects/pages/homePage');
const chai = require('chai');

class Ui {
    #ph = require('./pageHolder');
    
    get ph() {
        console.log('UI: get ph');
        return this.#ph;
    }

    get expect() {
        console.log('UI: get expect');
        return chai.expect;
    }

    cache = {};

    get header() {
       // console.log(this.cache);
        if (this.cache[Header.toString()]) {
            console.log('UI: get header from cache');
            return this.cache[Header.toString()];
        }
        console.log('UI: get header create object');
        let obj = new Header();
        this.cache[Header.toString()] = obj;
        return obj;

    }

    get homePage() {
       // console.log(this.cache);
        if (this.cache[HomePage.toString()]) {
            console.log('UI: Homepage from cache');
            return this.cache[HomePage.toString()];
        }
        console.log('UI: Homepage create object');
        let obj = new HomePage();
        this.cache[HomePage.toString()] = obj;
        return obj;

    }
}

module.exports = new Ui();