const express = require('express');
const router = express.Router();
const Genero = require('../models/Genero');

//LEER TODOS
router.get('/', async (req, res) => {
    try {
        const generos = await Genero.findAll();
        res.json(generos);
    } catch (error) {
        console.log("Error " + error);
        res.status(500).json({ "mensaje": "Error interno" });
    }
});

//CREAR
router.post('/', async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const nuevoGenero = await Genero.create({ nombre, descripcion });
        res.status(201).json(nuevoGenero);
    } catch (error) {
        console.log("Error " + error);
        res.status(500).json({ "mensaje": "Error al crear género" });
    }
});

//ACTUALIZAR (PUT)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        
        const [filasActualizadas] = await Genero.update(
            { nombre, descripcion },
            { where: { id: id } }
        );

        if (filasActualizadas === 0) {
            return res.status(404).json({ "mensaje": "Género no encontrado" });
        }
        res.json({ "mensaje": "Género actualizado correctamente" });
    } catch (error) {
        console.log("Error " + error);
        res.status(500).json({ "mensaje": "Error al actualizar género" });
    }
});

//ELIMINAR (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await Genero.destroy({ where: { id: id } });

        if (resultado === 0) {
            return res.status(404).json({ "mensaje": "Género no encontrado" });
        }
        res.json({ "mensaje": "Género eliminado correctamente" });
    } catch (error) {
        console.log("Error " + error);
        res.status(500).json({ "mensaje": "Error al eliminar género" });
    }
});

module.exports = router;