const express = require('express')
const router = express.Router()
const Proveedor = require('../database/models/Proveedor')

//crear
router.post('/',(req,res) =>{
    Proveedor.create({
        nif:req.body.nif,
        nombre:req.body.nombre,
        direccion:req.body.direccion,
    }).then((obj) =>{
        res.json(obj)
    })
})

//leer
router.get('/', (req, res) => {
    Proveedor.findAll().then((list) => {
        res.json(list)
    })
})
router.get('/:id', (req, res) => {
    Proveedor.findByPk(req.params.id).then((obj) => {
        res.json(obj)
    })
})

//modificar
router.put('/:id', (req, res) => {
    Proveedor.update({
        nif:req.body.nif,
        nombre:req.body.nombre,
        direccion:req.body.direccion,
    }, {
        where: { // Editar recurso cuando...
            id: req.params.id
        }
    }).then((obj) => {
        res.json(obj)
    })
})

//borrar
router.delete('/:id', (req, res) => {
    Proveedor.destroy({
        where: { // Eliminar recurso cuando...
            id: req.params.id
        }
    }).then((obj) => {
        res.json(obj)
    })
})

// Export
module.exports = router