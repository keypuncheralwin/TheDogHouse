const db = require('../database/db')

const Users = {
    checkUser(username,password){
      const sql = "SELECT name FROM users WHERE username= $1 AND password= $2";
      const values = [username,password];
      return db.query(sql,values).then((dbRes) => dbRes.rows);
    }
  };




  module.exports = Users;