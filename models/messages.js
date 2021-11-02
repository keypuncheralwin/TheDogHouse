const db = require('../database/db')

const Messages = {
   

    addMessages( body, sender_id, recipID, time) {
      // const sql = "INSERT INTO messages (body, sender_id, recipient_id, time, date) VALUES ($1, $2, $3, to_timestamp($4))";
      const sql = "INSERT INTO messages (body, sender_id, recipient_id, time) VALUES ($1, $2, $3, $4)";
      const values = [body, sender_id, recipID, time];
      return db.query(sql,values).then((dbRes) => console.log("success"));
    },

    getMessages(user_in_session, user_not_in_session) {
        const sql = "SELECT * FROM messages WHERE (sender_id=$1 AND recipient_id=$2) OR (sender_id=$2 AND recipient_id=$1) ORDER BY time ASC;";
        const values = [user_in_session, user_not_in_session];
        return db.query(sql,values).then((dbRes) => dbRes.rows);
      },

      getUserByID(id) {
        return db
          .query("SELECT * FROM users where id= $1", [id])
          .then((dbRes) => dbRes.rows);
      }
  };


  module.exports = Messages;
