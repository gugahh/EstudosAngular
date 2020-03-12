// this line allows us to use the expressjs module
var express = require("express");

// Add this line so we can serve files from our local
// directory
var path = require("path");
var app = express();

// Add the abillity to serve our static files from the public directory
app.use(express.static("public"));
app.use("/sportstore", express.static("SportStore"));

// Here we serve up our index page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/sportstore/", function(req, res) {
  res.sendFile(path.join(__dirname + "/SportStore/SportStoreMain.html"));
});

var server = app.listen(9000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Escutando em http://%s:%s", host, port);
});