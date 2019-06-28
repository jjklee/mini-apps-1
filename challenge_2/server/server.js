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

// app.post('/generator', (req, res) => {
//   // let report = generateReport(req.body);

//   console.log(report);
//   // res.status(201).send(report);
//   res.setHeader('Content-disposition', 'attachment; filename=test.csv');
//   res.set('Content-Type', 'text/csv');
//   res.status(200).send(report);
// })

app.post('/generator', generateReport);

// app.get('/download', (req, res) => {
//   let filePath = path.join(__dirname, 'report', 'test.csv');
//   res.download(filePath, (err) => {
//     if (err) {
//       next(err)
//     } else {
//       console.log('Sent : ', filePath);
//     }
//   }) 
// })

app.listen(port, () => console.log('Listenting to port ', port));