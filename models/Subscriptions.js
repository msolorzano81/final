

// Pull in Sequelize package
//const Sequelize = require("sequelize");
// Reference our connection to the database
//const sequelize = require("./config/connection.js");

// Create a "Subscriptions" model

module.exports = function(sequelize, DataTypes) {

    const Subscriptions = sequelize.define('subscriptions', {
        sub_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        link: DataTypes.STRING,
        price: DataTypes.STRING,
        frequency: DataTypes.STRING,
        category: DataTypes.STRING,
    },{
        timestamps: false
    
    });

    return Subscriptions;
}

// Sync with DB
//Subscriptions.sync();

// Export the Subscriptions Model
//module.exports = Subscriptions;


