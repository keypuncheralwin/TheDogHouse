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
      const sql = "SELECT dogs.id AS dog_id, dogs.name AS dog_name, dogs.breed,"
       +"dogs.age, dogs.gender, dogs.state_code AS dogs_state, dogs.description,"
       +"dogs.image, dogs.price, users.id AS user_id, users.name, users.email, "
       +"users.state_code AS users_state, users.fact"
       +" FROM dogs INNER JOIN users ON dogs.user_id = users.id WHERE dogs.id=$1;"
      const values=[dog_id]
      return db.query(sql,values).then((dbRes) => dbRes.rows);
    },

    editDog(name, breed, age, gender, state_code, description, imageUrls, price, user_id, id) {
      const sql = "UPDATE dogs SET name=$1, breed=$2, age=$3, gender=$4, state_code=$5, description=$6, image=$7, price=$8, user_id=$9 WHERE id=$10";
      const values = [name, breed, age, gender, state_code, description, imageUrls, price, user_id, id];
      return db.query(sql,values).then((dbRes) => dbRes.rows);
    },

    deleteByDogID(dog_id) {
      const sql = "DELETE FROM dogs WHERE id = $1";
      const values = [dog_id];
      return db.query(sql,values).then((dbRes) => dbRes.rows);
    },
    
    //getting dog info by the dog id 
    getDogById(dog_id){
      const sql = "SELECT * FROM dogs WHERE id=$1"
      const values=[dog_id]
      return db.query(sql,values).then((dbRes) => dbRes.rows);
    }

  };



  ///nothing
  



  module.exports = Dogs;
