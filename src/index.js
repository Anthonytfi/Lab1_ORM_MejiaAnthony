const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./database/database');

const autorRoutes = require('./routes/autor.routes');
const generoRoutes = require('./routes/genero.routes');
const libroRoutes = require('./routes/libro.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/autor', autorRoutes);
app.use('/genero', generoRoutes);
app.use('/libro', libroRoutes);

// Mensaje de prueba en la raíz
app.get('/', (req, res) => {
    res.send("API Biblioteca - Laboratorio 1 - Funcionando");
});

// Función principal de arranque
const main = async () => {
    try {
        await sequelize.sync({ force: false, alter: true });
        console.log("Tablas sincronizadas con PostgreSQL");

        // 2. Encender el Servidor
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Error al iniciar el servidor: " + error);
    }
};

main();