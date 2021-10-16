const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Sale extends Model {}
Sale.init({
    nombre: DataTypes.STRING,
	nitCc: DataTypes.DOUBLE,
    valor: DataTypes.DOUBLE,
    formaPago: DataTypes.STRING
}, {
    sequelize,
    modelName: "sale"
});

module.exports = Sale;