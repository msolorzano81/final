//*************************************************************** 
// apiRoutes.js - this file offers a set of routes for displaying and saving data to the database
//*************************************************************** */

// Dependencies
// ===========================================
const path = require('path');
const sequelize = require('sequelize');
//const db = require('../models')
const mysql = require('mysql');

// Require our Subscriptions model
const db = require("../models");

// Routes 
// ===========================================
module.exports = function(app) {

// Get all subscriptions route
    app.get('/api/all', (req, res) => {
      console.log("hello from api/all")
        db.subscriptions.findAll({}).then((results)=> {
            console.log(results);
            res.json(results);
        })
    })

// Get subscription box by category
    app.get("/api/posts/category/:category", function(req, res) {
      db.subscriptions.findAll({
        where: {
          category: req.params.category
        }
      }).then(function(dbCategory) {
        console.log(dbCategory);
        res.json(dbCategory);
      });
    });

    app.get('/api/create', (req, res) => {
      console.log("hello from api/all")
        db.subscriptions.create({
          name: "Hello3",
          description: "Found me",
          link: "www.heythere.com",
          price: "$33.00",
          frequency: "weekly",
          category: "beauty"
          
        }).then((results)=> {
            console.log(results);
            res.json(results);
        })
    })

}



/* module.exports = function(app) {
  // GET route for getting list of all subscription boxes
  app.get('/api/posts/', function(req, res){
    db.Subscriptions.findAll()
      .then(dbSubs => {
        console.log(dbSubs)
       res.json(dbSubs);
    });

  });

  // GET route for getting subscription boxes by category

  app.get("/api/posts/category/:category", function(req, res) {
    db.Subs.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(dbSubs) {
      console.log(dbSubs);
      res.json(dbSubs);
    });
  });

  // GET route for getting a particular subscription box
  app.get("/api/posts/:id", function(req, res) {
    db.Subs.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbSubs) {
      console.log(dbSubs);
      res.json(dbSubs);
    });
  });

  // POST 

  app.post('/api/posts', function (req, res){
    console.log("we hit the route!!!!", req.body)
    db.Subs.create(req.body).then(dbSubs => {
      res.json(dbSubs)
    });
  });
} */


