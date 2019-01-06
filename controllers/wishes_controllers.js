var express = require("express");

var router = express.Router();

var wish = require("../models/wish.js");

//get post put

router.get("/",function(req, res) {
    wish.selectAll(function(data){
        var hbsObject = {
            wishes: data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});

router.post("/", function(req, res) {
    wish.insertOne(req.body.wish_name, function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req,res) {
    var id = req.params.id;
    console.log("id",id);

    wish.updateOne(id, function() {
        res.redirect("/");
    });
});

module.exports = router