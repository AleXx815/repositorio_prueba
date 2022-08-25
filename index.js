// primer paso: requerimos/incluimos los paquetes necesarios
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// 1.1 configuracion
app.use(bodyParser.urlencoded({extended:true}));

// 2 rutas
app.get("/prueba", function(req, res){
    res.send("Hola mundo");
    res.sendFile(__dirname + "/index.html");
});

// 3 listen 
app.listen(4000, function(){console.log("Servidor iniciado")});