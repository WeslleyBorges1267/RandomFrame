const { DatabaseSync } = require('node:sqlite');
const database = new DatabaseSync('./sqlite/randomFrame.db');

module.exports = database;