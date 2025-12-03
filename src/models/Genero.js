const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');

const Genero = sequelize.define('Genero', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'genero',
    timestamps: false
});

module.exports = Genero;