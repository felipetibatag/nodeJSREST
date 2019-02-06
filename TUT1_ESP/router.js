function router(handle, pathName, response,dataPosteada) {
  console.log("Ruteando petición para " + pathName);
  if (typeof handle[pathName] === "function") {
    handle[pathName](response,dataPosteada);
  } else {
    console.log("No hay manipulador de petición para " + pathName);
    response.writeHead(400, { "content-type": "text/html" });
    response.write("404 Página no encontrada");
    response.end();
  }
}

exports.router = router;
