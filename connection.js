var mysql = require ('mysql')

var connection = mysql.createConnection({
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

    module.exports = connection