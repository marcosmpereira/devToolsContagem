const { Pool } = require('pg');
const { dbConnection } = require('./environment');

const db = new Pool(dbConnection);
module.exports = db;