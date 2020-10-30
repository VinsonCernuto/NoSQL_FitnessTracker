// Dependencies

var path = require('path');

module.exports = function(app){
    // Called for continue workout and new work out is clicked 
    app.get("/exercise", function(req, res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/status", function(req, res){
        res.sendFile(path.join(__dirname, "../public/status.html"));
    });
};