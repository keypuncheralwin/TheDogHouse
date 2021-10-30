const db = require('../database/db')

const Favourites = {
    getFavIDByUserID(user_id) {
      const sql = "SELECT dog_id FROM favourites WHERE user_id = $1";
      const values = [user_id];
      return db.query(sql,values).then((dbRes) => dbRes.rows);
    },
    addFav(user_id,dog_id) {
      const sql = "INSERT INTO favourites (user_id, dog_id) VALUES ($1, $2)";
      const values = [user_id,dog_id];
      return db.query(sql,values).then((dbRes) => dbRes.rows);
    },
    deleteFavByUserID(user_id) {
      const sql = "DELETE FROM favourites WHERE user_id = $1";
      const values = [user_id];
      return db.query(sql,values).then((dbRes) => dbRes.rows);
    },

    getFaveDogById(user_id){
      const sql = "SELECT * FROM dogs INNER JOIN favourites ON dogs.id = favourites.dog_id WHERE favourites.user_id=$1;";
      const values = [user_id];
      return db.query(sql,values).then((dbRes) => dbRes.rows);


    }
  };

  



  module.exports = Favourites;