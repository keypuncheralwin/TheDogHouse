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
    }, 

    //getting dog the user has added 
    getDogThatUserHasAdded(user_id){
      const sql = "SELECT * FROM dogs WHERE user_id=$1"
      const values=[user_id]
      console.log(values)
      return db.query(sql,values).then((dbRes) => dbRes.rows);
    },


    getDogAndPoster(dog_id){
      const sql = "SELECT * FROM dogs INNER JOIN users ON dogs.user_id = users.id WHERE dogs.id=$1;"
      const values=[dog_id]
      return db.query(sql,values).then((dbRes) => dbRes.rows);

    //getting dog info by the dog id 
    getDogById(dog_id){
      const sql = "SELECT * FROM dogs WHERE id=$1"
      const values=[dog_id]
      return db.query(sql,values).then((dbRes) => dbRes.rows);
    }

  };

  



  module.exports = Dogs;
