
const _ = require('lodash');
const ejs = require('ejs');
const fs = require('fs');
const fsExtra = require('fs-extra');
const htmlEntities = require('html-entities').AllHtmlEntities;

/**
 * Class with tools for the 'tools' property of a generator instance.
 */
module.exports = class {
    /**
     * Initializes a new instance of that class.
     *
     * @param {Object} generator The underlying generator.
     */
    constructor(generator) {
        this.generator = generator;
    }

}
