const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');

const Autor = sequelize.define('Autor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nacionalidad: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'autor', // Nombre real en la BD
    timestamps: false   // Desactivamos created_at y updated_at (estilo de tu docente)
});

module.exports = Autor;