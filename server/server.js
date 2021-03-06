const express = require('express');



var app = express();

app.get('/', (req,res) => {
  res.status(200).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
})

app.get('/users', (req, res) => {
  res.status(200).send([
    {
      name: 'Sergey',
      age: 21
    },
    {
      name: 'Carol',
      age: 25
    }
  ])
})

app.listen(3000);

module.exports.app = app;