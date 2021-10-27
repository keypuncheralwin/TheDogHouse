const db = require("../database/db");
const bcrypt = require("bcrypt");

const findPassword = (emailAddress) => {
  return db
    .query("SELECT password FROM users where email=$1", [emailAddress])
    .then((password) => password.rows[0].password);
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

  checkUser(email, password) {
    return findPassword(email).then((res) => {
        value=isValidPassword(password, res)
        return value
    //   value=isValidPassword(password, res);
    //   console.log(value)
    });
  },
};

const generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

const isValidPassword = (plainTextPassword, passwordHash) => {
  return bcrypt.compareSync(plainTextPassword, passwordHash);
};

module.exports = users;
