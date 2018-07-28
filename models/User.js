module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            required: true,
            
        },
        password: {
            type: DataTypes.STRING,
            required: true,
            
        },
       
    })

    return User;
}