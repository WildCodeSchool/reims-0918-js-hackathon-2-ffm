require("dotenv").config();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const connection = require("./conf");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function (email, password, cb) {
      connection.query(
        `SELECT id, email, password FROM users WHERE email = ? AND password = ?`,
        [email, password],
        (err, result) => {
          let error = false
          if (!result[0]) {
            error = true
          } else {
            if (password !== result[0].password) {
              error = true
            }
          }
          if (error) {
            return cb(null, false, { message: "Incorrect email or password. " });
          } else {
            return cb(null, { email, username: result[0].username }, { message: "Logged In Successfully" });
          }
        }
      );
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret"
    },
    function (jwtPayload, cb) {
      const user = jwtPayload;
      return cb(null, user);
    }
  )
);