// Imports
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

// Model definition
class Cliente extends Model {}

Cliente.init({
    dni: {
        type: DataTypes.NUMBER(8),
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: true
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fechanacimiento: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize,
    tableName: "clientes",
    modelName: "cliente"
})

// Export
module.exports = Cliente