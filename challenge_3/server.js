const express = require('express');
const path = require('path');
const parser = require('body-parser');
const { createUser } = require('./database/controller.js');

const app = express();
const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/form', createUser);
// app.get('/form', getUser)


app.listen(port, () => console.log('Listenting to port:', port));