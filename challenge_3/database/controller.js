const Checkout = require('./model.js');

const createUser = (req, res) => {
  const user = req.body.userdata;
  Checkout
    .create({
      name: user.name,
      email: user.email,
      password: user.password,
      line1: user.line1,
      line2: user.line2,
      city: user.city,
      state: user.state,
      zipcode: user.zipcode,
      phonenumber: user.phonenumber,
      ccnum: user.ccnum,
      ccexp: user.ccexp,
      cvv: user.cvv,
      billingzipcode: user.billingzipcode
    })
    .then((user) => {
      // console.log(user.dataValues);
      res.status(201).send(user.dataValues);
    })
    .catch(err => {
      res.status(404).send('Error creating user info')
    })
}

const getUser = () => {
  
}

module.exports = { createUser }