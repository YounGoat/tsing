'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , wade = noda.inRequire('wade')
    ;

describe('Wade-Giles Romanization', () => {
    
    it('Pinyin To Wade-Giles System', () => {
        assert.equal('chiang', wade.fromPinyin('jiang'));
    });
    
});