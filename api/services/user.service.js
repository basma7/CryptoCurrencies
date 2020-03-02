const pool = require("../../config/db");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into user(admin, nickname, email, password, currency) values (?, ?, ? , ?, ?)",
      ["0", data.email, data.email, data.password, "EUR"],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createAdmin: (data, callBack) => {
    pool.query(
      "insert into user(admin, nickname, email, password, currency) values (?, ?, ? , ?, ?)",
      ["1", data.email, data.email, data.password, "EUR"],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select id,admin,nickname,email,currency from user`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,admin,nickname,email,currency from user where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from user where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update user set nickname=?, email=?, password=?, currency=? where id = ?`,
      [data.nickname, data.email, data.password, data.currency, data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (cmid, callBack) => {
    pool.query(
      `delete from user where cmid = ?`,
      [cmid],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
