var orm = require("../config/orm.js");

var wish = {
    selectAll: function (callback) {
        orm.selectAll("wishes", function (res) {
            callback(res)
        })
    },

    insertOne: function (wish, callback) {
        orm.insertOne("wishes", wish, function (res) {
            callback(res)
        })
    },

    updateOne: function (id, callback) {
        orm.updateOne("wishes", [id], function (res) {
            callback(res)
        })
    }
}
module.exports = wish;