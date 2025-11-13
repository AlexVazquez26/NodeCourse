/****************************
 * 🔹 QUÉ ES UNA PROMESA
 ****************************/

/*Esta funcion devuelve una Promesa
porque no sabemos en que momento vaya a terminar de ejecutarse esta
funcion, por tal motivo, se le asigna otro hilo de nuestro
procesador a atender esta peticion*/

/*JavaScript en realidad no crea otro hilo (sigue siendo de un solo hilo), 
pero usa el event loop para “recordar” la promesa
 y continuar con otras tareas mientras tanto.
O sea: no bloquea el programa, sino que espera en segundo plano.
*/

const prom = Notification.requestPermission();

/* las lineas siguientes de codigo al ser una funcion que devuelve
una promesa, se entiende que debe de haber algo que nos mencione
cuando YA terminó (sea si se tarda 1s o 10 min)*/

/****************************
 * 🔹 THEN
 ****************************/
/*Esta linea se lee como "Cuando la promesa termine, entonces ejecuta
la funcion(sin parametros) siguiente"*/
prom.then(function (param) {
  //Aqui va lo que se va a ejecutar en la funcion
  if (param === 'granted') {
    //param es el resultado (o el nombre que quieras ponerle) y que para
    // esta especifica funcion promesa (se puede poner diferentes)
    //param, default, granted
    //En pocas palabras significa si el resultado de la promesa -> param
    //es === a 'granted' entonces has algo con esto
    //Esto sucede una vez que ya termino de ejectuarse la promesa
    // El nombre "result" o "param" no importa; puedes usar cualquier nombre descriptivo
    // como "status", "respuesta", etc.
  }
  console.log('Hola');
});
/* Esto es lo mismo de arriba solo que no tiene nombre la funcion
y aqui hay un parametro de entrada de (a)*/
//Las promesas solo devuelven un valor (no dos).
prom.then((result) => {
  //Aqui hace lago cuando se ejecute
});
//En este caso, result podría ser algo como "granted" o "denied",
// dependiendo del permiso del navegador.

Notification.requestPermission().then((result) => {
  //Esta es una forma de escribirla en una sola linea
});

/****************************
 * 🔹 CATCH
 ****************************/
/*tambien existe el catch que esto sucede cuando la promesa no se cumple
o falla de alguna manera estrepitosa
*/

prom.catch(function (err) {
  //Si llegase a fallar esto va a sucecer
  console.log('El error es el siguiente: ', err);
});

//Esto en una linea de codigo
Notification.requestPermission()
  .then((result) => {
    //Aqui hace algo en caso de que se haya podido cumplir
  })
  .catch((err) => {
    //Aqui hace algo en caso de que falle
  });

/****************************
 * 🔹 ASYNC / AWAIT
 ****************************/
//Vamos a modificar el mismo metodo pero de forma asycnronica

async function ejemplo() {
  try {
    const result = await Notification.requestPermission();
    //Aqui hace algo en caso de que se haya podido cumplir
    console.log('Resultado: ', result);

    const response = await fetch('./api/usuario');

    const data = await response.json();
    console.log('Datos: ', data);
  } catch (error) {
    console.log('Error', error);
  }
}

/****************************
 * 🔹 FINALLY
 ****************************/
//Ahora veremos el finally

prom.finally(function () {
  // esta linea de codigo se va a ejecutar al final sea que salga bien o salga mal
});

//Esto en una linea de codigo
Notification.requestPermission()
  .then((result) => {
    //Aqui hace algo en caso de que se haya podido cumplir
  })
  .catch((err) => {
    //Aqui hace algo en caso de que falle
  })
  .finally(() => {
    //Aqui hara algo al final sea que falle o no
  });

//Ahora aqui podriamos poner una promesa que a su vez tenga otra promesa dentro
const promAnidado = Notification.requestPermission();
const promAnidado2 = promAnidado.then((result1) => {
  if (result1 === 'default') {
    console.log('Es el default');
    return true;
  } else {
    console.log('No sabemos que es.');
    return false;
  }
});
//Aqui es donde empieza la magia podríamos acceder a ese promAnidado2 como
//UNa promesa así
promAnidado2.then((result2) => {
  //Aqui result2 se convierte en el resutlado del promAnidado 1
  //o sea que este retornaria true o false
  if (result2 === true) {
    console.log('Al final fue verdad');
  } else {
    console.log('No sabemos que fue');
  }
});

//Ejercicio de lectura

console.log('Inicio del programa'); //primero esta

const promesa = new Promise((resolve, reject) => {
  console.log('Dentro de la promesa');
  setTimeout(() => {
    console.log('Ejecutando setTimeout');
    resolve('Listo!');
  }, 2000);
});

promesa.then((resultado) => {
  console.log('Promesa resuelta con:', resultado);
});

console.log('Fin del programa');

/****************************
 * 🔹 CREATING OWN PROMISES
 ****************************/

//Para frabricar las propias promesas
const promesaCreada = new Promise(function (resolve, reject) {
  console.log('Me ejecuto asicronamente');
  //👉 Se imprime enseguida, no realmente de forma asíncrona.
  //Ocurre en el momento en que se crea la promesa, antes de que el setTimeout siquiera espere.
  //Aqui entra la funcion de resolve, se va a ejecutar esto de forma asincrona
  //setTimeout(función, tiempoEnMilisegundos);
  //función ---→ lo que quieres que se ejecute después del tiempo.
  //tiempoEnMilisegundos → cuánto tiempo esperar
  // antes de ejecutar la función (1 segundo = 1000 ms).
  //Aqui podríamos hacer algunos calculos, si mi analogía no me falla
  //el resolve podría verse como un return
  setTimeout(function () {
    resolve(42); //<----- Despues de 1 segundo lo que resuelve es un 42
  }, 1000);

  //Aqui lo que pasa es que se va a crear un timmer de 1000ms (1seg) hasta que se genere
  //el resolve al finalizar, es una forma de hacer un metodo asincrono
});

promesaCreada.then((res) => {
  console.log('Esto va a suceder una ves que se resuelva el valor es:', res);
  //en este caso resolve es lo mismo que res o sea se 42 pero se va  ejecutar
  // despues de 1 segundo
});

console.log('Final de mi programa');
/********************************************************************************************
 * 🌍 ENGLISH VERSION BELOW
 * ------------------------------------------------------------------------------------------
 * The following section is the full English translation of the documentation above.
 * Everything after this line explains the same concepts but written in English.
 * ------------------------------------------------------------------------------------------
 ********************************************************************************************/
/****************************
 * 🔹 WHAT IS A PROMISE
 ****************************/

/* This function returns a Promise
because we don’t know when it will finish executing.
For that reason, the task is handled asynchronously,
so JavaScript can continue doing other things meanwhile. */

/* JavaScript actually doesn’t create another thread (it remains single-threaded),
but uses the event loop to “remember” the promise
and continue running other tasks in the meantime.
In other words, it doesn’t block the program — it waits in the background. */

const promEnglish = Notification.requestPermission();

/* The following lines of code, since the function returns a promise,
imply that there must be something that tells us
when it has FINISHED (whether it takes 1s or 10 minutes). */

/****************************
 * 🔹 THEN
 ****************************/
/* This line can be read as: “When the promise finishes, then execute
the following function (without parameters).” */
prom.then(function (param) {
  // Here goes what will be executed once the promise finishes.
  if (param === 'granted') {
    // param is the result (or whatever name you want to give it) and,
    // for this specific promise, it can be 'default' or 'granted'.
    // In short, it means: if the result of the promise (param)
    // is equal to 'granted', then do something with it.
    // This happens once the promise has finished executing.
    // The name “result” or “param” doesn’t matter;
    // you can use any descriptive name like “status” or “response”, etc.
  }
  console.log('Hello');
});
/* This is the same as above, but using an arrow function (anonymous)
and a single parameter (a). */
// Promises only return ONE value (not two).
prom.then((result) => {
  // Something happens here once it executes
});
// In this case, result could be something like "granted" or "denied",
// depending on the browser permission state.

Notification.requestPermission().then((result) => {
  // This is a one-line version of the same thing.
});

/****************************
 * 🔹 CATCH
 ****************************/
/* There’s also `.catch()`, which is used when the promise fails
or encounters an unexpected error.
*/

prom.catch(function (err) {
  // If something goes wrong, this will be executed.
  console.log('The error is:', err);
});

// Same thing in one line:
Notification.requestPermission()
  .then((result) => {
    // Do something if the promise is fulfilled successfully
  })
  .catch((err) => {
    // Do something if the promise fails
  });

/****************************
 * 🔹 ASYNC / AWAIT
 ****************************/
// Now let's modify the same method but using async/await

async function example() {
  try {
    const result = await Notification.requestPermission();
    // Do something when it resolves successfully
    console.log('Result:', result);

    const response = await fetch('./api/usuario');
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.log('Error:', error);
  }
}

/****************************
 * 🔹 FINALLY
 ****************************/
// Now let's see the `finally` block

prom.finally(function () {
  // This line will always execute at the end,
  // whether the promise succeeds or fails.
});

// One-line version:
Notification.requestPermission()
  .then((result) => {
    // Do something if fulfilled
  })
  .catch((err) => {
    // Do something if failed
  })
  .finally(() => {
    // This will always execute at the end, no matter what
  });

// Now we could have a promise that itself returns another promise
const promNested = Notification.requestPermission();
const promNested2 = promNested.then((result1) => {
  if (result1 === 'default') {
    console.log('It’s the default');
    return true;
  } else {
    console.log('We don’t know what it is.');
    return false;
  }
});
// Here’s where the magic starts — we can access that promNested2
// as another promise like this:
promNested2.then((result2) => {
  // Here result2 becomes the result of promNested1,
  // meaning it returns true or false.
  if (result2 === true) {
    console.log('In the end, it was true');
  } else {
    console.log('We don’t know what it was');
  }
});

// Reading exercise

console.log('Start of the program'); // first line

const promise = new Promise((resolve, reject) => {
  console.log('Inside the promise');
  setTimeout(() => {
    console.log('Executing setTimeout');
    resolve('Done!');
  }, 2000);
});

promise.then((result) => {
  console.log('Promise resolved with:', result);
});

console.log('End of the program');

/****************************
 * 🔹 CREATING YOUR OWN PROMISES
 ****************************/

// To create your own promises
const createdPromise = new Promise(function (resolve, reject) {
  console.log('I execute immediately');
  // 👉 This runs right away, not truly asynchronously.
  // It happens the moment the promise is created, before setTimeout waits.
  // Here comes the resolve function, which executes asynchronously.
  // setTimeout(function, milliseconds);
  // function → what you want to execute after the delay.
  // milliseconds → how long to wait before executing (1 second = 1000 ms).
  // Here we could do some calculations. If my analogy is correct,
  // `resolve` can be thought of as a “return”.
  setTimeout(function () {
    resolve(42); //<----- After 1 second, it resolves with 42
  }, 1000);

  // What happens here is that a 1000ms (1s) timer is created
  // until resolve is triggered at the end — this simulates
  // an asynchronous method.
});

createdPromise.then((res) => {
  console.log('This will happen once it resolves; the value is:', res);
  // In this case, resolve is the same as res, i.e. 42,
  // but it executes after 1 second.
});

console.log('End of my program');
