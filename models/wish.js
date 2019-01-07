var orm = require("../config/orm.js");

var wish = {
    all: function (cb) {
        orm.all("wishes", function (res) {
            cb(res);
        })
    },

    create: function (cols, vals, cb) {
        orm.create("wishes", cols, vals, function (res) {
            cb(res)
        })
    },

    update: function (objColVals, cb) {
        orm.update("wishes", objColVals, function (res) {
            cb(res)
        })
    },

    delete: function(condition, cb) {
        orm.delete("wishes", condition, function(res) {
          cb(res);
        });
      }
}
module.exports = wish;