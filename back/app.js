require("dotenv").config();
const express = require("express");
const connection = require("./conf");
const app = express();
const port = 5000;
const passport = require("passport");
require("./passport-strategy");

const cors = require("cors");

app.use(cors());

const jwt = require("jsonwebtoken");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/users', function (req, res, next) {
  connection.query("SELECT * FROM users", function (error, results) {
    if (error) {
      res.status(500).send("lol")
    } else {
      res.status(200).json(results)
    }
  })
})

app.post('/signup', function (req, res, next) {
  // let hash = bcrypt.hashSync(req.body.password, 10)
  connection.query("INSERT INTO users(email, password, username) VALUES(?,?,?)", [req.body.email, req.body.password, req.body.username], function (error, results, fields) {
    if (error) {
      res.status(500).json({ flash: error.message });
    }
    res.status(200).json({ flash: "User has been signed up !" })

  })
})

app.post('/signin', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.log('test')
      return res.status(500).send(err)
    }
    if (!user) {
      return res.status(400).json({ message: info.message })
    }
    const token = jwt.sign(user, 'your_jwt_secret')
    return res.json({ user, token })
  })(req, res)
})
app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened ...");
  }
  console.log(`Server listened on ${port}`);
});