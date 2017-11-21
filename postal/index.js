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

function uniform_postal(postal) {
    return postal.toLowerCase().replace(' ', '').replace('-', '');
}

function toChinese(postal) {
    postal = uniform_postal(postal);
    
    let zh = null;
    for (let name in chinese2postal) {
        if (uniform_postal(chinese2postal[name]) == postal) {
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