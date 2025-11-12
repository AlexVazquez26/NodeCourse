const path = require('node:path');
//unir rutas con path.join
//barra separadora de carpetas segun so
console.log(path.sep);
//te muestra los slahs dependiendo el sistema operativo
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);
