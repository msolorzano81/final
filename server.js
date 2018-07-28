//*************************************************************** 
// Server.js - This file is the initial starting point for the Node/Express server
//*************************************************************** */

// Dependencies
// ======================================================
const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');
//const mysql = require('mysql');
const connection = require('./config/connection.js')
//const sequelize = require ('sequelize');

// Sets up the Express App
// =======================================================
const app = express();
const PORT = process.env.PORT || 3002;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
// =======================================================
require("./routes/api-routes.js")(app);
// var connection = require('./connection.js');
// If no API routes are hit, send the React app
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const db = require('./models');
db.sequelize.sync();

// Starts the server to begin listening
// =======================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
  });




//const selectAllSubsQuery = 'SELECT * FROM Subscriptions';




// app.get('/api/subscriptions/', function(req, res){
//   db.Subscriptions.findAll()
//     .then(dbSubs => {
//       console.log(dbSubs, "is it reading something...")
//      res.json(dbSubs);
//   });

// });


app.post("/api/signup", function(req, res) {
  if (!req.body.email || !req.body.password) {
    return res.send(400)
  }
  
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

  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });




// app.get("/api/subscriptions", function(req, res) {
//     connection.query("select * from subscriptions", function(err, stuffFromDb){
//       res.json(stuffFromDb)
//     })
// }); */

/*
app.get('/api/subscriptions', (req, res) => {
  connection.query(selectAllSubsQuery, (err, results) => {
    if(err) {
      return res.send(err)
    } else {
      return console.log('info from backend is being accessed');//res.json(results)
      
    }
  });
});





// app.listen(PORT, function() {
//   console.log("App listening on PORT : " + PORT);
)}
*/
