const express = require('express');
const path = require('path')
const parser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 3000;


app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended : true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/generator', (req, res) => {
  console.log(req.body)
  .then(/*send csv report back to resp*/)
  .catch(err => res.status(404).send('Error posting'))
})

app.listen(port, () => console.log('Listenting to port ', port));