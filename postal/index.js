'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    
    /* in-package */
    , chinese2postal = require('./chinese2postal')
    ;

function fromChinese(term) {
    let postal = chinese2postal[term];
    return postal;
}

function toChinese(postal) {
    postal = postal.toLowerCase();
    
    let zh = null;
    for (let name in chinese2postal) {
        if (chinese2postal[name].toLowerCase() == postal) {
            zh = name;
            break;
        }
    }
    return zh;
}

module.exports = {
    fromChinese,
    toChinese
};