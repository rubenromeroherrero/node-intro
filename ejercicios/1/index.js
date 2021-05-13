//console.log("Primer ejercicio");

//Importamos el módulo nativo de NODE --> file system 
//permite leer y escribir contenido
const fs = require('fs');
//Importamos el módulo que nos permite transformar a mayúsculas
const stringUtils = require('./utils/stringUppercase');

//renombramos el fichero .txt
fs.rename('./1/input.txt', './1/output.txt', () => {
  //console.log("nombre cambiado");
});

//leemos el contenido del fichero output
const pkg = fs.readFileSync("./1/output.txt");

//convertirmos el output.txt a string para poder leerlo
const transformPkg = pkg.toString("utf-8");

//convertimos a mayúsculas 
const upperPkg = stringUtils.capitalize(transformPkg);
console.log(upperPkg);

//----------------------------------------
/* sirve para ver la dirección en la cual aplicamos el run 
console.log(process.cwd);
*/

