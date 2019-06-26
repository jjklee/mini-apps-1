const Sequelize = require('sequelize');
const db = require('./index.js');

const Checkout = db.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  line1: Sequelize.STRING,
  line2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zipcode: Sequelize.STRING,
  phonenumber: Sequelize.STRING,
  ccnum : Sequelize.STRING,
  ccexp : Sequelize.STRING,
  cvv: Sequelize.STRING,
  billingzipcode: Sequelize.STRING
}, {
  timestamps: false
})

Checkout.sync()

module.exports = Checkout;