const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}
User.init({
    nombre: DataTypes.STRING,
    //birthday: DataTypes.DATE
    email: DataTypes.STRING,
    rol: DataTypes.STRING,
    estado: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    sequelize,
    modelName: "user"
});

module.exports = User;