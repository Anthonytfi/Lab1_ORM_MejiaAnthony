const express = require('express');
const router = express.Router();
const Libro = require('../models/Libro');
const Autor = require('../models/autor');
const Genero = require('../models/Genero');

//READ (Leer todos con relaciones)
router.get('/', async (req, res) => {
    try {
        const libros = await Libro.findAll({
            include: [
                { model: Autor, as: 'autor' },
                { model: Genero, as: 'genero' }
            ]
        });
        res.json(libros);
    } catch (error) {
        console.log("Error " + error);
        res.status(500).json({ "mensaje": "Error al obtener libros" });
    }
});

//READ (Leer UNO por ID)
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const libro = await Libro.findByPk(id, {
            include: [
                { model: Autor, as: 'autor' },
                { model: Genero, as: 'genero' }
            ]
        });

        if (!libro) {
            return res.status(404).json({ "mensaje": "Libro no encontrado" });
        }
        res.json(libro);
    } catch (error) {
        console.log("Error " + error);
        res.status(500).json({ "mensaje": "Error al buscar libro" });
    }
});

//CREATE (Crear)
router.post('/', async (req, res) => {
    try {
        const { titulo, editorial, autor_id, genero_id } = req.body;
        
        // Validación simple
        if (!autor_id || !genero_id) {
            return res.status(400).json({ "mensaje": "Faltan IDs de autor o género" });
        }

        const nuevoLibro = await Libro.create({ 
            titulo, 
            editorial, 
            autor_id, 
            genero_id 
        });
        res.status(201).json(nuevoLibro);
    } catch (error) {
        console.log("Error " + error);
        res.status(500).json({ "mensaje": "Error al crear libro" });
    }
});

//UPDATE (Actualizar)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, editorial, autor_id, genero_id } = req.body;

        // Buscamos el libro primero
        const libro = await Libro.findByPk(id);
        
        if (!libro) {
            return res.status(404).json({ "mensaje": "Libro no encontrado para actualizar" });
        }

        // Actualizamos usando el método del ORM
        await libro.update({ titulo, editorial, autor_id, genero_id });
        
        res.json({ "mensaje": "Libro actualizado correctamente", libro });
    } catch (error) {
        console.log("Error " + error);
        res.status(500).json({ "mensaje": "Error al actualizar libro" });
    }
});

//DELETE (Eliminar)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        // Método destroy de Sequelize
        const resultado = await Libro.destroy({
            where: { id: id }
        });

        if (resultado === 0) {
            return res.status(404).json({ "mensaje": "No existe un libro con ese ID" });
        }
        
        res.json({ "mensaje": "Libro eliminado correctamente" });
    } catch (error) {
        console.log("Error " + error);
        res.status(500).json({ "mensaje": "Error al eliminar libro" });
    }
});

module.exports = router;