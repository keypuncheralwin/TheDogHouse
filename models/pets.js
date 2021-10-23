const db = require('../database/db')

const Pets = {
    getAll() {
      const sql = "SELECT * FROM challenges";
      return db.query(sql).then((dbRes) => dbRes.rows);
    }
  };




  module.exports = Pets;