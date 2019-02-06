
var queryString = require("querystring");
function iniciar(response, dataPosteada) {
  console.log("Manipulador de petición INICIAR fue llamado");
  var body =
    "<html>" +
    "<head>" +
    '<meta http‐equiv="Content‐Type" content="text/html;charset=UTF‐8" />' +
    "</head>" +
    "<body>" +
    '<form action="/subir" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Enviar texto" />' +
    "</form>" +
    "</body>" +
    "</html>";
  response.writeHead(200, { "content-type": "text/html" });
  response.write(body);
  response.end();
}

function subir(response, dataPosteada) {
  console.log("Manipulador de petición SUBIR  fue llamado");
  response.writeHead(200, { "content-type": "text/html" });
  let text_limpio=queryString.parse(dataPosteada)['text']
  response.write(text_limpio);
  response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
