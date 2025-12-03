const express = require('express');
const router = express.Router();
const Autor = require('../models/autor');

//LEER TODOS
router.get('/', async (req, res) => {
    try {
        const autores = await Autor.findAll();
        res.json(autores);
    } catch (error) {
        console.log("Error " + error);
        res.status(500).json({ "mensaje": "Error al obtener autores" });
    }
});

//CREAR
router.post('/', async (req, res) => {
    try {
        const { nombre, nacionalidad } = req.body;
        const nuevoAutor = await Autor.create({ nombre, nacionalidad });
        res.status(201).json(nuevoAutor);
    } catch (error) {
        console.log("Error " + error);
        res.status(500).json({ "mensaje": "Error al crear autor" });
    }
});

//ACTUALIZAR (PUT)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, nacionalidad } = req.body;
        
        const [filasActualizadas] = await Autor.update(
            { nombre, nacionalidad },
            { where: { id: id } }
        );

        if (filasActualizadas === 0) {
            return res.status(404).json({ "mensaje": "Autor no encontrado" });
        }
        res.json({ "mensaje": "Autor actualizado correctamente" });
    } catch (error) {
        console.log("Error " + error);
        res.status(500).json({ "mensaje": "Error al actualizar autor" });
    }
});

//ELIMINAR (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;        
        const resultado = await Autor.destroy({ where: { id: id } });

        if (resultado === 0) {
            return res.status(404).json({ "mensaje": "Autor no encontrado" });
        }
        res.json({ "mensaje": "Autor eliminado correctamente" });
    } catch (error) {
        console.log("Error " + error);
        res.status(500).json({ "mensaje": "Error al eliminar (¿Quizás tiene libros asociados?)" });
    }
});

module.exports = router;