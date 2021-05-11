const os = require("os");

const freemem = os.freemem();

const dirhome = os.homedir();

const cpus = os.cpus();

const platform = os.platform();

console.log(freemem);
console.log(dirhome);
console.log(cpus);
console.log(platform);
