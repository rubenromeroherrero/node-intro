//console.log("Segundo ejercicio");

//Importamos el módulo nativo de NODE --> os module
//Nos permite sacar info del sistema
const os = require('os');
const fs = require('fs'); 

//Guardamos en una constante de tipo object lo que va a decir 
const info = {
  //memoria libre en el sistema
  freemen: os.freemem(),
  //arquitectura subyacente
  architecture: os.arch(),
  //EXTRA=> ruta de acceso al directorio principal del usuario actual
  homedir: os.homedir()
}

//Necesitamos convertir a string y pasar luego el valor al fichero
const infoString = JSON.stringify(info);

//Escribir información en el output
const pkg = fs.writeFileSync('./2/output.txt', infoString, () => {});

//PROCESO PARA LEER POR CONSOLA
//leemos el contenido del fichero output
const pkgRead = fs.readFileSync("./2/output.txt");

//convertirmos el output.txt a string para poder leerlo
const transformPkgRead = pkgRead.toString("utf-8");
console.log(transformPkgRead); 