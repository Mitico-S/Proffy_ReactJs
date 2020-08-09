import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  const users = [
    { name: 'João Pedro', age: 19 },
    { name: 'Gyh', age: 19 },
  ];
  return res.json(users);
});
app.listen(3333);
