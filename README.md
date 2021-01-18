# spotify-search

Permite buscar una canción en Spotify consumiendo una API

Instalación:

1. Clonar el repositorio

2. Instalar las dependencias del backend (NodeJS), para ello se debe ir a la carpeta backend y ejecutar npm install, con esto npm leera las dependencias del package.json y las instalará en node_modules.

3. Instalar las dependencias del frontend (ReactJS), para ello se debe ir a la carpeta frontend y ejecutar npm install, con esto npm leera las dependencias del package.json y las instalará en node_modules. 
Nota: Al ejecutar este comando se instalará  el software para pruebas automatizadas Cypress que se usó para realizar las pruebas end to end.

4. Arrancar el servidor de NodeJS: Para ello en la carpeta backend ejecutamos node index.js o nodemon index.js en caso de tener instalado el nodemon.

5. Arrancar el entorno de desarrollo de ReactJS: para ello vamos a la carpeta frontend y ejecutamos npm start, despues de compilar en el navegador se abrirá http://localhost:3000, en caso de que termine de compilar y no abra la ventana la ingresamos en el navegador.

6 .Con los dos entornos en marcha la aplicación ya está lista para ser usada.

Realización de pruebas con Cypress

Para las pruebas del aplicativo se uso la herramienta Cypress, esta se instala con el npm install en el frontend como se explicó en el punto 3.

En la carpeta frontend se puede encontrar los archivos de Cypress, se crearon dos scripts para realizar pruebas los cuales estan en cypress/integration/pruebas
