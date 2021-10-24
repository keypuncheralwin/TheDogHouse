const pg = require('pg');

const db = new pg.Pool({
    database: 'TheDogHouse',
});

module.exports = db;