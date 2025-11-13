const express = require('express');
const ditto = require('./ditto.json');

const app = express();
app.disable('x-powered-by');

const PORT = process.env.PORT ?? 3000;

//A diferencia de levantar un servidor con node.js (nativo)
//con express no es necesario especifcar el header de como va a recibir los
//datos por parte del cliente
//por tal motivo podemos escribir directamente lo que va a enviar al cliente
//

//Esto es un midleWare
//una logica que pasa antes de pasar atravez
//podemos hacer que les afecte a los GET los POST
//O en su defecto que le afecte a una direccion en especifico app.use({url especifico},(req, resp, next) => {
//Ejemplo basico de un MIDDLEWARE
// app.use((req, resp, next) => {
//   console.log('Mi Primer middleware');
//   //revisar algo previo
//   //trackear la request a la base de datos
//   //revisar si el usuario tiene cookies
//   //NO SE PUEDE OLVIDAR EL NEXT();
//   next();
// });

app.use(express.json());

//Todo este codigo fue modificado por ->app.use(express.json())
// app.use((req, resp, next) => {
//   if (req.method !== 'POST') return next();
//   if (req.headers['content-type'] !== 'application/json') return next();
//   //Aqui solo llegan requeste que son POST y tiene el header Content-Type JSON
//   let body = '';
//   //escuchar el evento
//   req.on('data', (chunk) => {
//     body += chunk.toString();
//   });
//   req.on('end', () => {
//     const data = JSON.parse(body);
//     //resp.status(200).json(data);<----- no se puede responder aqui
//     req.body = data;
//     next();
//   });
// });
//Todo este codigo fue modificado por ->app.use(express.json())

app.get('/', (req, resp) => {
  //El status no es necesario por default ya viene el 200
  //--->resp.status(200).send('<h1>Mi Pagina</h1>');
  resp.send('<h1>Mi Pagina con express</h1>');
  //send
  //resp.json({ message: 'Aqui va el json' });
  //Express se encarga de manejar el json o lo que sea que le pasemos
  //No puede haber 2 metodos de send en un mismo comando de get (por lo que veo)
});
//Creacion del POST
app.post('/pokemon', (req, resp) => {
  resp.status(201).json(req.body);
  //<----Todo ese metodo se paso al Middleware de arriba---->
  //   let body = '';
  //   //escuchar el evento
  //   req.on('data', (chunk) => {
  //     body += chunk.toString();
  //   });
  //   req.on('end', () => {
  //     const data = JSON.parse(body);
  //     resp.status(200).json(data);
  //   });
});

app.get('/pokemon/ditto', (req, resp) => {
  resp.json(ditto);
});
//Esto es lo mismo de que poner app.* (o sea todo lo que no pueda entrar)
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
