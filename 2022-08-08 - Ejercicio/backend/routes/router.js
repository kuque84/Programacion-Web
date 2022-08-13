// Imports
const express = require('express')
const router = express.Router()

const clientesRouter = require('./clientes')
const productosRouter = require('./productos')
const proveedoresRouter = require('./proveedores')

// Routes definition
router.get('/', (request, response) => {
    response.send('Hola, soy un servidor WEB usando router')
})

// Use routers
router.use('/clientes', clientesRouter)
router.use('/productos', productosRouter)
router.use('/proveedores', proveedoresRouter)

// Export
module.exports = router