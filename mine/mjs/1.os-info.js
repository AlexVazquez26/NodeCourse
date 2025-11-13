const { time } = require('node:console');
const os = require('node:os');

console.log('Informacion del sistema operativo:');
console.log('----------------------------------');
console.log('Nombre del sistema operativo', os.platform());
console.log('Version del sistema operativo', os.release());
console.log('Arquitectura', os.arch());
console.log("CPU's", os.cpus()); //<- podemos escalar procesos en nodes
console.log('Memoria libre', os.freemem() / 1024 / 1024);
console.log('Memoria Total', os.totalmem() / 1024 / 1024);
console.log('Uptime', os.uptime() / 3600);
