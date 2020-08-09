import express from 'express';

const app = express();

app.get('/users', () => {
  const users = [
    { name: 'João Pedro', age: 19 },
    { name: 'Gyh', age: 19 },
  ];
});

app.listen(3333);
