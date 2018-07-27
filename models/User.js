module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
       
    })

    return User;
}