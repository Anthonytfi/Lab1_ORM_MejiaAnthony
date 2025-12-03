const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');
const Autor = require('./autor');
const Genero = require('./Genero');

const Libro = sequelize.define('Libro', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    editorial: {
        type: DataTypes.STRING
    },
    autor_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genero_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'libro',
    timestamps: false
});

// Esto permite hacer consultas como: "Dame el libro con su autor"
Libro.belongsTo(Autor, { foreignKey: 'autor_id', as: 'autor' });
Libro.belongsTo(Genero, { foreignKey: 'genero_id', as: 'genero' });

module.exports = Libro;