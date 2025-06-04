# CONTROL ESCOLAR – REGISTRO DE ASISTENCIA

Este proyecto tiene como finalidad automatizar el registro de asistencia del nivel bachillerato del **Centro Escolar General Rafael Cravioto Pacheco**. Está diseñado para facilitar la gestión de entradas de los alumnos por grado, grupo y semestre, además de contar con listas filtrables, control de usuarios y autenticación segura.

## 🧩 Problemática

En muchas instituciones de educación media superior, la asistencia se registra manualmente, generando errores, pérdida de información y procesos lentos. Esto también dificulta el monitoreo por parte de los docentes o directivos.

## 💡 Propuesta de solución

Implementar un sistema web que permita registrar automáticamente las asistencias de los estudiantes mediante su número de NIA. El sistema divide los registros por grado y grupo, presenta listas organizadas por fecha y permite que los administradores consulten los accesos de forma rápida y confiable.

## 🎯 Objetivo general

Desarrollar una plataforma web con autenticación de usuarios que permita gestionar el registro de asistencias de los estudiantes en tiempo real, con filtros por grado, grupo y semestre.

## 🎯 Objetivos específicos

- Automatizar el registro de asistencia por NIA.  
- Dividir registros en listas por fecha, grado y grupo.  
- Proteger las rutas mediante autenticación con JWT.  
- Mostrar registros en tablas responsivas con filtros por fecha.  
- Implementar una interfaz de inicio de sesión segura.  
- Permitir el cierre de sesión y almacenamiento del token.  

---

## ⚙️ Tecnologías utilizadas

### 🔙 Backend (API RESTful)

- **Node.js** – Entorno de ejecución JavaScript en el servidor.
- **Express.js** – Framework minimalista para crear rutas y manejar peticiones.
- **MongoDB** – Base de datos NoSQL orientada a documentos.
- **Mongoose** – ORM para la interacción con MongoDB.
- **JWT (JSON Web Token)** – Sistema de autenticación por tokens.
- **Dotenv** – Para la gestión de variables de entorno.
- **CORS** – Control de acceso a recursos de la API.
- **Nodemon** – Herramienta de desarrollo para reinicio automático del servidor.

### 🖥️ Frontend (SPA - React)

- **React.js** – Biblioteca JS para construir interfaces web.
- **Vite** – Herramienta moderna para construir proyectos React.
- **TypeScript** – Tipado estático para JavaScript moderno.
- **Bootstrap 5** – Framework CSS para diseño responsivo y elegante.
- **Axios** – Cliente HTTP para interactuar con la API.

---

## 👨‍💻 Funcionalidades principales

### 🔐 Autenticación

- Inicio de sesión con verificación de credenciales desde MongoDB.
- Protección de rutas del backend usando middleware `verifyToken`.
- Almacenamiento seguro del token JWT en `localStorage`.
- Cierre de sesión con limpieza de token.

### 📋 Registro de asistencias

- Captura del número de NIA y registro automático del alumno.
- Almacenamiento del grupo, grado, hora, semestre y si hubo retardo.
- Registro dinámico y organizado por fecha y hora.

### 📄 Visualización y filtros

- Visualización de listas filtradas por fecha, grado y grupo.
- Tablas detalladas para los grados 1°, 2° y 3°.
- Filtro dinámico por fecha de asistencia.
- Consultas disponibles por semestre y grado.

---

## 👥 Equipo de Desarrollo

| Integrante | Contacto | Rol | Observaciones |
|------------|----------|-----|---------------|
| Diego Salvador Tecorralco Martínez | [@DiegoTecorralco](https://github.com/DiegoTecorralco) | Líder de Backend, Líder de Frontend, Líder de Documentación y Coordinación del Proyecto | ✅ Revisado y aprobado |
