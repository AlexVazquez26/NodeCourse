const express = require('express'); //require -> commonJS

const port = process.env.PORT ?? 3000;
const app = express();
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.json({ message: 'hola mundo' });
});

app.listen(port, () => {
  console.log(`Server listening on server port http://localhost:${port}`);
});
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});
