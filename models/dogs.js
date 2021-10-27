const db = require('../database/db')

const Dogs = {
    getAllDogs() {
      const sql = "SELECT * FROM dogs";
      return db.query(sql).then((dbRes) => dbRes.rows);
    },
    addDog(name, breed, age, gender, state_code, description, imageUrls, price, user_id) {
      const sql = "INSERT INTO dogs (name, breed, age, gender, state_code, description, image, price, user_id ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
      const values = [name, breed, age, gender, state_code, description, imageUrls, price, user_id];
      return db.query(sql,values).then((dbRes) => dbRes.rows);
    }
  };

  



  module.exports = Dogs;