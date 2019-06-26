const express = require('express');
const path = require('path')
const parser = require('body-parser');
const morgan = require('morgan');
const { generateReport } = require('./controller')
const app = express();
const port = 3000;


app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended : true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/generator', (req, res) => {
  let report = generateReport(req.body);
  res.status(201).send(report);
})

// app.get('/generator', (req, res) => {
//   let filePath = path.join(__dirname, 'report', 'test.csv');
//   res.sendFile(filePath);
// })

app.listen(port, () => console.log('Listenting to port ', port));