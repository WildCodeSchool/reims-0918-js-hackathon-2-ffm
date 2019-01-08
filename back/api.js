const express = require("express");
const connection = require("./conf");
const app = express();
const passport = require("passport");
const bddQuery = require("./functions/bddQuery");
require("./passport-strategy");
const jwt = require("jsonwebtoken");

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
      } else {
        res.status(200).json({
          flashMessage: {
            type: "success",
            message: "Vous êtes maintenant inscrit, identifiez-vous."
          }
        });
      }
    }
  );
});

app.post("/signin", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!user) {
      console.log("test");
      return res.status(400).json({ message: info.message });
    }
    const token = jwt.sign(user, "your_jwt_secret");
    return res.json({
      user,
      token,
      flashMessage: { type: "success", message: "Vous êtes bien connecté." }
    });
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

app.get("/classement", async (req, res) => {
  const rawClassementUser = await bddQuery("SELECT * FROM users");
  const response = rawClassementUser.results.map(user => ({
    ...user,
    total: user.memory + user.findWord + user.pumpItUp + user.arcade
  }));
  res.json(response);
});
module.exports = app;
