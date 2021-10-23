const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Product extends Model {}
Product.init({
    nombre: DataTypes.STRING,
    //birthday: DataTypes.DATE 
    precioAd: DataTypes.DOUBLE,
    precioV: DataTypes.DOUBLE
}, {
    sequelize,
    modelName: "product"
});

module.exports = Product;