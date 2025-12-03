# Laboratorio 1: API RESTful de Biblioteca con Sequelize y PostgreSQL

Este proyecto es una API RESTful desarrollada en **Node.js** con **Express**, que utiliza **Sequelize** como ORM para gestionar una base de datos relacional en **PostgreSQL**. El sistema permite administrar libros, autores y géneros literarios, implementando relaciones entre tablas y operaciones CRUD completas.

**Estudiante:** Anthony Mejia  
**Asignatura:** Aplicaciones Distribuidas  
**Laboratorio:** 1 - Construcción de API RESTful con ORM

---

## Requisitos Previos

Para ejecutar este proyecto, necesitas tener instalado en tu computador:
1.  **Node.js** (v14 o superior).
2.  **PostgreSQL** (Motor de base de datos).
3.  **pgAdmin 4** (Opcional, para visualizar la base de datos).
4.  **Git** (Para clonar el repositorio).

---

## Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto en tu máquina local:

### 1. Clonar el repositorio
Descarga el código fuente a tu computadora:
```bash
git clone [https://github.com/Anthonytfi/Lab1_ORM_MejiaAnthony.git](https://github.com/Anthonytfi/Lab1_ORM_MejiaAnthony.git)
cd Lab1_ORM_MejiaAnthony
```
---

# Instalar dependencias
Dado que la carpeta node_modules no se incluye en el repositorio (por optimización), debes instalar las librerías necesarias ejecutando:
```bash
npm install
```

---

# Configurar Variables de Entorno
El proyecto utiliza variables de entorno para proteger las credenciales.
1. Crea un archivo llamado .env en la raíz del proyecto (junto al package.json).
2. Copia y pega el siguiente contenido, ajustando DB_PASSWORD con tu contraseña real de PostgreSQL:

```bash
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=tu_contraseña_de_postgres
DB_PORT=5432
DB_NAME=biblioteca_lab_db
```
---

# Preparar la Base de Datos
1. Abre pgAdmin 4 (o tu terminal de SQL).
2. Crea una base de datos vacía con el nombre exacto que pusiste en el .env:
- Nombre: biblioteca_lab_db
3. ¡No necesitas crear tablas! El sistema las creará automáticamente al iniciar.

---

# Ejecución
```bash
npm run dev
```












