// Core requirements
var express = require('express');

// Secondary requiremnt


// Require Application
var posts = require('./lib/posts')
var users = require('./lib/users')


// Global variables
var app = express();

// Fire up the applications
app.use(posts);
app.use(users);

// Run the server
app.listen(3000);
console.log('Application is up and running on Port :3000');
