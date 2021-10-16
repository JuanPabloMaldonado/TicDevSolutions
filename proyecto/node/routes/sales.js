const express = require('express');
const router = express.Router();
const Sale = require('../database/models/Sale');
const Sequelize = require('sequelize');

// INDEX /api/sales
router.get('/', (req, res) => {
    Sale.findAll().then(sales => {
        res.json(sales);
    })
})

// CREATE /api/sales
router.post('/', (req, res) => {
    Sale.create({
        nombre: req.body.nombre,
        nitCc: req.body.nitCc,
        valor: req.body.valor,
        formaPago: req.body.formaPago
    }).then(sale => {
        res.json(sale);
    })
});

// READ /api/sales/:id
router.get('/:id', (req, res) => {
    Sale.findByPk(req.params.id).then(sale => {
        res.json(sale);
    })
});
 
// UPDATE /api/sales/:id
router.patch('/:id', (req, res) => {
    Sale.update({
        nombre: req.body.nombre,
        nitCc: req.body.nitCc,
        valor: req.body.valor,
        formaPago: req.body.formaPago
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

// DELETE /api/sales/:id
router.delete('/:id', (req, res) => {
    Sale.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;