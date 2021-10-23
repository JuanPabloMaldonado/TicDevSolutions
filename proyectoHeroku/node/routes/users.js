const express = require('express');
const router = express.Router();
const User = require('../database/models/User');
const Sequelize = require('sequelize');

// INDEX /api/users
router.get('/', (req, res) => {
    User.findAll().then(users => {
        res.json(users);
    })
})

// CREATE
router.post('/', (req, res) => {
    User.create({
        nombre: req.body.nombre,
        email: req.body.email,
        rol: req.body.rol,
        estado: req.body.estado,
        password: req.body.password
    }).then(user => {
        res.json(user);
    })
});

// READ /api/users/:id
router.get('/:id', (req, res) => {
    User.findByPk(req.params.id).then(user => {
        res.json(user);
    })
});

// UPDATE /api/users/:id
router.patch('/:id', (req, res) => {
    User.update({
        nombre: req.body.nombre,
        email: req.body.email,
        rol: req.body.rol,
        estado: req.body.estado,
        password: req.body.password
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

// DELETE /api/users/:id
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;