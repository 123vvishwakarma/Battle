
module.exports = function (app, passport) {
    const JwtStrategy = require('passport-jwt').Strategy,
        ExtractJwt = require('passport-jwt').ExtractJwt;
    let opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = app.config.TOKEN_SECRET;
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        console.log("JWT : ",jwt_payload);
        if (jwt_payload.role == 1) {
            return done(null, true);
        } else {
            return done(null, false);
        }
    }));
};