'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    
    /* in-package */
    , py2wade = require('./py2wade')
    ;

function fromPinyin(pinyin) {
    let pinyins = [];
    if (typeof pinyin == 'string') {
        pinyins = pinyin.split(/\s+/g);
    }
    else if (pinyin instanceof Array) {
        pinyins = pinyin;
    }
    else {
        throw new Error('incorrect argument type');
    }

    let wades = pinyins.map(char_pinyin => py2wade[char_pinyin]);
    return wades;
}

module.exports = {
    fromPinyin
};