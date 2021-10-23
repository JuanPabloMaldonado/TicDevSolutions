const express = require('express');
const router = express.Router();
const Product = require('../database/models/Product');
const Sequelize = require('sequelize');

// INDEX /api/products
router.get('/', (req, res) => {
    Product.findAll().then(products => {
        res.json(products);
    })
})

// CREATE /api/products
router.post('/', (req, res) => {
    Product.create({
        nombre: req.body.nombre,
        precioAd: req.body.precioAd,
        precioV: req.body.precioV
    }).then(product => {
        res.json(product);
    })
});

// READ /api/products/:id
router.get('/:id', (req, res) => {
    Product.findByPk(req.params.id).then(product => {
        res.json(product);
    })
});

// UPDATE /api/products/:id
router.patch('/:id', (req, res) => {
    Product.update({       
        nombre: req.body.nombre,
        precioAd: req.body.precioAd,
        precioV: req.body.precioV
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

// DELETE /api/products/:id
router.delete('/:id', (req, res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;