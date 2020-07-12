/* eslint-disable no-plusplus */
const express = require('express');

const tempRouter = express.Router();

tempRouter.get('/', (req, res) => {
  //   console.log("hello world");
  res.send('Hello world');
});

tempRouter.get('/star', (req, res) => {
  //   res.send(`*<br />**<br />***<br />****<br />*****<br />`);
  let data = '';
  const size = 5;
  for (let i = 1; i <= size; i++) {
    for (let j = 0; j < i; j++) {
      data += '*';
    }
    data += '<br />';
  }
  res.send(data);
});

tempRouter.get('/star/:num', (req, res) => {
  //   res.send(`*<br />**<br />***<br />****<br />*****<br />`);
  let data = '';
  const size = req.params.num;
  for (let i = 1; i <= size; i++) {
    for (let j = 0; j < i; j++) {
      data += '*';
    }
    data += '<br />';
  }
  res.send(data);
});

tempRouter.get('/info', (req, res) => {
  //   const name = req.query.name;
  //   const age = req.query.age;
  const { name, age } = req.query;
  res.send(`Welcome, ${name}. you are ${age} years old`);
});

module.exports = tempRouter;
