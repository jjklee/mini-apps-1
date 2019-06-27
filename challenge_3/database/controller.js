const Checkout = require('./model.js');

const createUser = (req, res) => {
  Checkout
    .create()
    .then((user) => {
      res.status(201).send(user.dataValues.id.toString())
    })
    .catch((err) => res.status(404).send('Error creating user'))
}

const updateUser = (req, res) => {
  const user = req.body;
  console.log('===', user);
  if (user.f1) {
    Checkout
      .update({
        name: user.name,
        email: user.email,
        password: user.password
      }, 
        { where: { id: user.userid },
      })
      .then(() => {
        res.status(200).send('Updated user f1');
      })
      .catch(err => {
        res.status(404).send('Error updating user info f1')
      })
  } 
  else if (user.f2) {
    Checkout
      .update({
        line1: user.line1,
        line2: user.line2,
        city: user.city,
        state: user.state,
        zipcode: user.zipcode,
        phonenumber: user.phonenumber,
      }, 
        { where: { id: user.userid },
      })
      .then(() => {
        res.status(201).send('Updated user f2');
      })
      .catch(err => {
        res.status(404).send('Error updating user info f2')
      })
  } else if (user.f3) {
    Checkout
      .update({
        ccnum: user.ccnum,
        ccexp: user.ccexp,
        cvv: user.cvv,
        billingzipcode: user.billingzipcode
      }, 
        { where: { id: user.userid },
      })
      .then(() => {
        res.status(201).send('Updated user f3');
      })
      .catch(err => {
        res.status(404).send('Error updating user info f3')
      })
  }
}

// const getUser = () => {
  
// }

module.exports = { createUser, updateUser }