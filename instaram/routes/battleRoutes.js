module.exports = function (app, passport) { 
	app.post('/battle/createJwtToken', require('../instaram/apis/battleApis').createJwtToken);
    app.get('/battle/searchBattle', function(req, res, next) {
    	passport.authenticate('jwt', { session: false },(err, battle) => {
    		if(!battle) {
    			res.status(401).json({
					message: "Unauthorized",
					data: {},
					res: false
				});
    		} else {
    			next();
    		}
    	})(req, res, next)
    }, require('../instaram/apis/battleApis').searchBattle);
    app.get('/battle/countBattle', function(req, res, next) {
    	passport.authenticate('jwt', { session: false },(err, battle) => {
    		if(!battle) {
    			res.status(401).json({
					message: "Unauthorized",
					data: {},
					res: false
				});
    		} else {
    			next();
    		}
    	})(req, res, next)
    }, require('../instaram/apis/battleApis').countBattle);
    app.get('/battle/listBattle', function(req, res, next) {
    	passport.authenticate('jwt', { session: false },(err, battle) => {
    		if(!battle) {
    			res.status(401).json({
					message: "Unauthorized",
					data: {},
					res: false
				});
    		} else {
    			next();
    		}
    	})(req, res, next)
    }, require('../instaram/apis/battleApis').listBattle);
    app.get('/battle/statsBattle', function(req, res, next) {
    	passport.authenticate('jwt', { session: false },(err, battle) => {
    		if(!battle) {
    			res.status(401).json({
					message: "Unauthorized",
					data: {},
					res: false
				});
    		} else {
    			next();
    		}
    	})(req, res, next)
    }, require('../instaram/apis/battleApis').statsBattle);
};