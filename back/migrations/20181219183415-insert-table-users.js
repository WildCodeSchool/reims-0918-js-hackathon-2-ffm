"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.insert(
    "users",
    ["email", "username", "password"],
    ["mathieu@thomas.fr", "Mathieu", "password"],
    callback
  );
  db.insert(
    "users",
    ["email", "username", "password"],
    ["florentin@coyard.fr", "Florentin", "password"],
    callback
  );
  db.insert(
    "users",
    ["email", "username", "password"],
    ["fabien@raymond.fr", "Fabien", "password"],
    callback
  );
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  version: 1
};
