const express = require('express')
const router = express.Router()
const Cliente = require('../database/models/Cliente')
const ClienteProducto = require ('../database/models/ClienteProducto')

//crear
router.post('/',(req,res) =>{
    Cliente.create({
        dni:req.body.dni,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        direccion:req.body.direccion,
        fechanacimiento:req.body.fechanacimiento
    }).then((obj) =>{
        res.json(obj)
    })
})

//leer
router.get('/', (req, res) => {
    Cliente.findAll().then((list) => {
        res.json(list)
    })
})
router.get('/:id', (req, res) => {
    Cliente.findByPk(req.params.id).then((obj) => {
        res.json(obj)
    })
})

//modificar
router.put('/:id', (req, res) => {
    Cliente.update({
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
    Cliente.destroy({
        where: { // Eliminar recurso cuando...
            id: req.params.id
        }
    }).then((obj) => {
        res.json(obj)
    })
})

// Export
module.exports = router