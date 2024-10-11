# Juntadita Project

Juntadita Project es una api diseñada para poder facilitar la reunion entre amigos.

## Requisitos

- Node.js >= 20.x

## Instalación

1. Clona el repositorio:
  ```bash
  git clone https://github.com/GenaroMazur/juntadita_project.git
  cd juntadita_project
  ```

2. Instala las dependencias:
  ```bash
  npm install
  ```

## Uso

1. Configura las variables de entorno necesarias en un archivo `.env`. Puedes usar el archivo `.env.example` como referencia.

2. Inicia la aplicación:
  ```bash
  npm start
  ```

3. La aplicación debería estar corriendo en `http://localhost:3000`.

## Scripts

- `npm start`: Inicia la aplicación.
- `npm run build`: Compila el proyecto.
- `npm test`: Ejecuta las pruebas.

## Estructura del Proyecto

- `src/`: Contiene el código fuente de la aplicación.
  - `Core.ts`: Archivo principal que maneja la configuración y el inicio del servidor.
  - `utils/`: Utilidades y funciones auxiliares.
  - `index.ts`: Punto de entrada de la aplicación.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
