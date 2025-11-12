const path = require('node:path');
//unir rutas con path.join
//barra separadora de carpetas
//console.log(path.sep);
//te muestra los slahs dependiendo el sistema operativo 
const filePath = path.join('content', 'subfolder', 'test.txt');
//console.log(filePath);

//Esto realmente no esta apuntando a nada, solo es como un metodo
//Que recorta strings
const base = path.basename('C:/Users/avla2/OneDrive/Documentos/JS Script Course/JavaScriptCourse/complete-javascript-course-master/05-Guess-My-Number/final/index.html');

console.log("El archivo final es: ",base);

//Con este quitamos el html de la ecuaion dejandolo "limpio"
const fileName = path.basename('C:/Users/avla2/OneDrive/Documentos/JS Script Course/JavaScriptCourse/complete-javascript-course-master/05-Guess-My-Number/final/index.html', '.html');

console.log("El archivo final es: ",fileName);
//Te busca la extension

const extension = path.extname('image.as.der.jpg')

console.log(extension);
