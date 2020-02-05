var path = require("path");
const fs = require("fs"); //used to store and retrieve notes

var noteData = require("../db/db");

module.exports = function(){

    app.get("/api/notes", function(req, res){
        res.json(noteData)
    });
    app.post("/api/notes", function(req, res){
        noteData.push(req.body);
        res.json(noteData);
    })

}