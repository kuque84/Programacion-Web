const { Model } = require ('sequelize')
const sequelize = require ('../sequelize')

class ClienteProducto extends Model {}

ClienteProducto.init({}, {
    sequelize,
    modelName: 'clienteproducto',
    tableName: 'clientesproductos'
})

module.exports = ClienteProducto