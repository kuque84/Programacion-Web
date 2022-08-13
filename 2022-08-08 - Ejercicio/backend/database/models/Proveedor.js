// Imports
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

// Model definition
class Proveedor extends Model {}

Proveedor.init({
    nif: {
        type: DataTypes.STRING(8),
        allowNull: false,
        validate: {
            min: 6
        },
        unique: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    tableName: "proveedores",
    modelName: "proveedor"
})

// Export
module.exports = Proveedor