require("dotenv").config();
const express = require("express");
const connection = require("./conf");
const app = express();
const port = 5000;
const passport = require("passport");
const bddQuery = require("./functions/bddQuery");
require("./passport-strategy");

const cors = require("cors");

app.use(cors());

const jwt = require("jsonwebtoken");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/users", function(req, res, next) {
  connection.query("SELECT * FROM users", function(error, results) {
    if (error) {
      res.status(500).send("lol");
    } else {
      res.status(200).json(results);
    }
  });
});

app.post("/signup", function(req, res, next) {
  // let hash = bcrypt.hashSync(req.body.password, 10)
  connection.query(
    "INSERT INTO users(email, password, username) VALUES(?,?,?)",
    [req.body.email, req.body.password, req.body.username],
    function(error, results, fields) {
      if (error) {
        res.status(500).json({ flash: error.message });
      }
      res.status(200).json({
        flashMessage: {
          message: "Vous êtes bien inscrit, identifiez vous.",
          type: "success"
        }
      });
    }
  );
});

app.post("/signin", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log("test");
      return res.status(500).send(err);
    }
    if (!user) {
      return res.status(400).json({ message: info.message });
    }
    const token = jwt.sign(user, "your_jwt_secret");
    return res.json({ user, token });
  })(req, res);
});

app.put(
  "/score",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    console.log(req.body);
    const user = await bddQuery(
      "SELECT * FROM users WHERE id = ?",
      req.user.id
    );
    const actualScore = user.results[0][req.body.game_name];
    if (actualScore < req.body.score) {
      const rawUpdateUser = await bddQuery("UPDATE users SET ? WHERE id = ? ", [
        { [req.body.game_name]: req.body.score },
        req.user.id
      ]);
      if (rawUpdateUser.err) {
        console.log(rawUpdateUser.err);
        res
          .status(409)
          .send("La requête ne peut pas être traitée à l'état actuel");
      } else {
        res.status(200).json({
          flashMessage: {
            message:
              "Votre nouveau score maximun pour ce jeu, a été mis à jour.",
            type: "success"
          }
        });
      }
    } else {
      res.json({
        flashMessage: {
          message: "Votre score maximum est plus haut que votre nouveau score.",
          type: "error"
        }
      });
    }
  }
);

app.get("/webcam", (req, res) => {
  connection.query("SELECT * FROM screenshots", function(
    error,
    results,
    fields
  ) {
    if (error) {
      res.status(500).json({ flash: error.message });
    }
    res.status(200).json({
      screenshots: results
    });
  });
});

app.post("/webcam", (req, res) => {
  connection.query(
    "INSERT INTO screenshots(url, date) VALUES(?,?)",
    [req.body.url, req.body.date],
    function(error, results, fields) {
      if (error) {
        res.status(500).json({ flash: error.message });
      } else {
        res.status(200).json({
          flashMessage: {
            message: "Votre photo a bien été enregistrée",
            type: "success"
          }
        });
      }
    }
  );
});

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened ...");
  }
  console.log(`Server listened on ${port}`);
});
