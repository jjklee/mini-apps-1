const Sequelize = require('sequelize');

const db = new Sequelize('checkout', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established')
  })
  .then(err => {
    console.error('Unable to connect to the database');
  })

module.exports = db