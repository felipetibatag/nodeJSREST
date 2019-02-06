var server = require("./server");
var router = require("./router");
var requestsHandlers = require("./requestshandlers");

var handle = {};
handle["/"] = requestsHandlers.iniciar;
handle["/iniciar"] = requestsHandlers.iniciar;
handle["/subir"] = requestsHandlers.subir;

server.iniciar(router.router, handle);
