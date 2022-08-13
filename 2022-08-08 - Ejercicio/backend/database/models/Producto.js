// Imports
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

// Model definition
class Producto extends Model {}

Producto.init({
    codigo: {
        type: DataTypes.STRING(8),
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preciounitario: {
        type: DataTypes.DECIMAL(8),
        allowNull: false,
    },
}, {
    sequelize,
    tableName: "productos",
    modelName: "producto"
})

// Export
module.exports = Producto