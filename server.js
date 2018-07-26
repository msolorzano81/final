var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');

var connection = require('./connection.js')


const db = require('./models');

db.sequelize.sync({ force: true });

var app = express();

var PORT = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function(data) {
      console.log(data)
      res.json(200);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      res.status(422).json(err.errors[0].message);
    });
  });

  app.post("/api/login", function(req, res) {
    
    db.User.find({
      where: {
        email: req.body.email,
      }
    }).then(function(data) {
      if (data && req.body.password === data.password) {
        res.json(200);
      } else {
        res.send(422);
      }
      
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      res.status(422).json(err.errors[0].message);
    });
  });

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



app.get("/subscriptions", function(req, res) {
    connection.query("select * from subscriptions", function(err, stuffFromDb){
        res.json(stuffFromDb)
    })
});

app.listen(PORT, function() {
  console.log("App listening on PORT : " + PORT);
});
