var connection = require("./connection.js");

var tableName = "wishes";

var orm = {

    selectAll: function (callback) {
        var str = "SELECT * FROM * " + tableName;
        connection.query(str, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result)
        });

    },

    insertOne: function (wish, callback) {
        var str = "INSERT INTO" + tableName + "(wish_name) VALUES (?)";

        connection.query(str, [wish.wish_name], function (err, result) {
            if (err) {
                throw err;
            }
            callback(result)
        })

    },

    updateOne: function (id, callback) {
        var str = "UPDATE" + tableName + "SET made = true WHERE id = ?";

        connection.query(str, [id], function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        })
    }



};
module.exports = orm