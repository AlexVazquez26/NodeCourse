//Agumentos de entrada
//console.log(process.argv);

//Conrolar el proceso y su salida
// process.exit(1); //Se sale del programa

// //Podemos controlar events del proceso
// process.on('exit', () => {
//   //Limpiar recursos
// }); //cuando salga hay que realizar una limpieza los partentesis indican una funcion

console.log(process.cwd()); //<--- cwd = current working directory
//devuelve la ruta completa de la carpeta actual desde donde se ejecutó el script.

//platform
console.log(process.env.PEPITO);
