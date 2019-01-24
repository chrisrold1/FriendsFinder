//Pull Depencies
const express = require('express');
const path = require('path');

//Configure Express application 
//This will sets up basic properties for our express
var app = express();

//Initial Port where to go on local host
var PORT = process.env.PORT || 3000;

// For serving of static CSS
app.use(express.static(__dirname + "/app/css"));

//sets up to handle data parsing
app.use(express.urlencoded({ extended : true}));
app.use(express.json());
 
//Routes
//This routes is like a map where you can navigate ex google.com/chrisrold ; chrisrold will be a path or routes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener 
//this code here will listen to our server on which port you should navigate to view it on the web
app.listen(PORT, function() {
    console.log("The App Start on PORT : " + PORT );
});