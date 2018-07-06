// Basic NPM Modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport');

// Express framework initialization
const app = express();

// Logger initialization
app.use(logger('dev'));

// Passport intialization
app.use(passport.initialize());
// Schema reference
app.schema = {};

// Parsing requests
app.use(bodyParser.urlencoded({
	extended: false,
	limit: '50mb'
}));
app.use(bodyParser.json({
	limit: '50mb'
}));

// Set Port
app.set('port', process.env.PORT || 8080);

// Configuration reference
app.config = require('./config/devConfig.js');

//
require('./passportAuth/passportAuth.js')(app, passport);



// Common Function reference
app.common = require('./instaram/functions/common');

// Mongoose Database connection (with auto-increment initialization)
require('./onServerStart/mongooseConnection.js')(app, mongoose);

// Handle uncaught exception
require('./onServerStart/uncaughtException.js')(app);

// API Router reference
require('./router.js')(app, passport);
require('./models')(app, mongoose);

// Data Access Layer reference
app.crud = require('./dal/crud');

// Server Start
const listener = app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
	//Call script
	require('./onServerStart/scripts.js')(app);
});