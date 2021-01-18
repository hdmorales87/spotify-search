//cargar librerias
var express = require('express');
var http = require('http');
var path = require('path');

//inicializar express
var app = express();

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//puerto
app.set('port', process.env.PORT || 5000);

// configurar motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

require('./routes')(app);

//ruta de comprobación
app.get('/', function(req, res) {    
    res.send('Servidor Funcionando!');
});

// capturar errores
app.use(function(err, req, res, next) {
  	console.error(err.stack);
  	res.status(500).send('Error: '+err.stack);
});

//arrancar el servidor
http.createServer(app).listen(app.get('port'), function(){
  	console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app; 