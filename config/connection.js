//*************************************************************** 
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
//*************************************************************** */

//Dependencies
const Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
// Edit this object to use your mySQL user/database information

const sequelize = new Sequelize("treatyoself_DB", "root", "", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


// Exports the connection for other files to use
module.exports = sequelize; 

/* const mysql = require ('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    
    // Your port; if not 3306
    port: 3306,
    
    // Your username
    user: "root",
    
    // Your password
    password: "",
    database: "treatyoself_DB"
    });
    
    connection.connect(function(err) {
    if (err) {
    console.error("error connecting: " + err.stack);
    }
    });

    module.exports = connection; */