const db = require("../database/db");
const bcrypt = require("bcrypt");

const findPassword = (emailAddress) => {
  return db
    .query("SELECT password FROM users where email=$1", [emailAddress])
    .then((password) => password.rows);
};

const users = {
  insertUser(name, email, state_code, fact, password) {
    const hashed_password = generateHash(password);
    return db
      .query(
        "INSERT INTO users(name, email, state_code, fact, password) VALUES($1, $2, $3, $4, $5)",
        [name, email, state_code, fact, hashed_password]
      )
      .then((dbRes) => console.log("succes"));
  },

  findUserId(email) {
    const sql = "SELECT id FROM users WHERE email= $1";
    const values = [email];
    return db.query(sql,values).then((dbRes) => dbRes.rows);
  },

  findUserById(id) {
    const sql = "SELECT name, email FROM users WHERE id= $1";
    const values = [id];
    return db.query(sql,values).then((dbRes) => dbRes.rows);
  },

  checkUser(email, password) {
    return findPassword(email).then((res) => {

      if (res.length === 0) {
        return false;
      } else{
        console.log(res)
        console.log(res[0].password);
        value = isValidPassword(password, res[0].password);
        return value;
      }
    });
  },

  getUserByEmail(email) {
    return db
      .query("SELECT * FROM users where email= $1", [email])
      .then((dbRes) => dbRes.rows);
  },

  updatUserInformation(user_name, email, state_code, fact, id){
    const sql = "UPDATE users SET name=$1, email=$2, state_code=$3, fact=$4 WHERE id=$5";
    const values = [user_name, email, state_code, fact, id ];
    return db.query(sql,values).then(() =>{console.log("succes")});
  }

};

const generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

const isValidPassword = (plainTextPassword, passwordHash) => {
  return bcrypt.compareSync(plainTextPassword, passwordHash);
};

module.exports = users;
