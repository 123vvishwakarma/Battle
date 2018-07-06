
exports = module.exports = function (app, mongoose) {
	// Users Schemas
	require('./schemas/battle/battleSchema')(app, mongoose);
};