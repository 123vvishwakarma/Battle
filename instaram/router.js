module.exports = function (app, passport) {
	require('./routes/battleRoutes.js')(app, passport);
};