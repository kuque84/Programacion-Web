const express = require('express')
const router = express.Router()
const Producto = require('../database/models/Producto')
const ClienteProducto = require ('../database/models/ClienteProducto')

//crear
router.post('/',(req,res) =>{
    Producto.create({
        codigo:req.body.codigo,
        nombre:req.body.nombre,
        preciounitario:req.body.preciounitario,
    }).then((obj) =>{
        res.json(obj)
    })
})

//leer
router.get('/', (req, res) => {
    Producto.findAll().then((list) => {
        res.json(list)
    })
})
router.get('/:id', (req, res) => {
    Producto.findByPk(req.params.id).then((obj) => {
        res.json(obj)
    })
})

//modificar
router.put('/:id', (req, res) => {
    Producto.update({
        dni:req.body.dni,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        direccion:req.body.direccion,
        fechanacimiento:req.body.fechanacimiento
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
    Producto.destroy({
        where: { // Eliminar recurso cuando...
            id: req.params.id
        }
    }).then((obj) => {
        res.json(obj)
    })
})

// Export
module.exports = router