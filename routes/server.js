//Pull Depencies
//npm package that we use to make our app more easy 
const express = require('express');
const path = require('path');

//Configure Express application 
//This will sets up basic properties for our express / this will also tell node that we are creating a app using express
var app = express();

//Initial Port where to go on local host , this will be the server where the apps run by typing localhost8080
var PORT = process.env.PORT || 8080;


//sets up to handle data parsing
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

app.use(express.static("public"));

 
//Routes
//This routes is like a map where you can navigate ex google.com/chrisrold ; chrisrold will be a path or routes

require("../routes/apiRoutes")(app);
require("../routes/htmlRoutes")(app);

//Listener 
//this code here will listen to our server on which port you should navigate to view it on the web
app.listen(PORT, function() {
    console.log('The App Start on PORT :'+ PORT);
});