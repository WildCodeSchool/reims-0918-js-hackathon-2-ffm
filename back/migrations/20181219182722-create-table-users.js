'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    "users",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true },
      username: { type: "string", length: 100, notNull: true },
      email: { type: "string", length: 100, unique: true },
      password: { type: "string", length: 50 },
      pumpItUp: { type: "int", defaultValue: 0 },
      memory: { type: "int", defaultValue: 0 },
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.dropTable("users", callback);
};

exports._meta = {
  "version": 1
};
