const pg = require('pg');

const db = new pg.Pool({
    database: 'ThePetStore',
});

module.exports = db;