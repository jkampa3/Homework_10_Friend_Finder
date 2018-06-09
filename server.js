//required npm modules
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//variable
var app = express();

//hosting port
var PORT = process.env.PORT || 3000;

// express for parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
require(".app/routing/apiRoutes")(app);
require(".app/routing/htmlRoutes")(app);

//validate listening on port
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});