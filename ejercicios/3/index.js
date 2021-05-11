//console.log("Tercer ejercicio");

//Importamos el paquete Cowsay
const cow = require('cowsay');
const fs = require('fs');

//Guardamos en una constante de tipo string lo que va a decir 
const sentence = cow.say({
	text : "Bienvenido a CodeHouse Academy",
	e : "oO",
	T : "U "
});

//guardamos el contenido en el output
const pkg = fs.writeFileSync('./3/output.txt', sentence, () => {});

//PROCESO PARA LEER POR CONSOLA
//leemos el contenido del fichero output
const pkgRead = fs.readFileSync("./3/output.txt");

//convertirmos el output.txt a string para poder leerlo
const transformPkgRead = pkgRead.toString("utf-8");
console.log(transformPkgRead);

