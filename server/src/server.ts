import express, { request } from 'express';

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});
app.listen(3333);
