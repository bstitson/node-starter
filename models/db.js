const sqlite3 = require('better-sqlite3');
const path = require('path');
const db = new sqlite3(path.resolve('posts.db'), {"fileMustExist": true});

db.exec("CREATE TABLE if not exists post (id INTEGER PRIMARY KEY, title TEXT, contents TEXT, categoryId INTEGER, timeStamp DATETIME DEFAULT CURRENT_TIMESTAMP)");

function query(sql, params) {
  return db.prepare(sql).all(params);
}

function run(sql, params) {
  return db.prepare(sql).run(params);
}

module.exports = {
  query,
  run
}
