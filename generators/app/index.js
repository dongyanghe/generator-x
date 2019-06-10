const chalk = require('chalk');
const fs = require('fs');
const Generator = require('yeoman-generator');
const os = require('os');
const path = require('path');
const tools = require('./tools');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.egoose = require('@egodigital/egoose');
        this.tools = new tools(this);
    }

}
