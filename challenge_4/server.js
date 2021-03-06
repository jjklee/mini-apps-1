const express = require('express');
const parser = require('body-parser');
const path = require('path');
// const {updateBoard} = require('./controller.js')

const app = express();
const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// app.post('/board', updateBoard)

app.listen(port, () => console.log("Listening on port: ", port));