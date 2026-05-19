import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Bot esta online!'));
app.listen(port, () => console.log('Servidor fantasma rodando na porta ' + port));
