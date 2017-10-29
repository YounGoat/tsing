'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , wade = noda.inRequire('wade')
    , postal = noda.inRequire('postal')
    ;

describe('Wade-Giles Romanization', () => {
    
    it('Pinyin to Wade-Giles System', () => {
        assert.equal('chiang', wade.fromPinyin('jiang'));
    });
    
});


describe('Postal System', () => {
    
    it('Chinese to Postal', () => {
        assert.equal('Tsinghua', postal.fromChinese('清华'));
    });

    it('Postal to Chinese', () => {
        assert.equal('清华', postal.toChinese('tsinghua'));
    });
    
});