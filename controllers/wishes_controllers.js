var express = require("express");

var router = express.Router();

var wish = require("../models/wish.js");

//get post put

router.get("/",function(req, res) {
    wish.all(function(data){
        var hbsObject = {
            wishes: data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});
router.post("/api/wishes", function(req, res) {
    wish.create([
      "wish_name", "made"
    ], [
      req.body.wish_name, req.body.made
    ], function(result, err) {
      if (err) {
        console.log(err)
      }
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/wishes/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    wish.update({
     made: req.body.made
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/wishes/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    wish.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


module.exports = router