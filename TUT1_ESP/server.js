var http = require("http");
var url = require("url");

function iniciar(router, handle) {
  function onRequest(request, response) {
    let dataPosteada = "";
    let pathName = url.parse(request.url).pathname;
    console.log("Petición recibida, ruta = " + pathName);
    request.setEncoding("utf8");
    request.addListener("data", trozoPosteado => {
      dataPosteada += trozoPosteado;
      console.log("trozo post :" + trozoPosteado);
    });
    request.addListener("end", () => {
      router(handle, pathName, response, dataPosteada);
    });
  }
  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado");
}
exports.iniciar = iniciar;
