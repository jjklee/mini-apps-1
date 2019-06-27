class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      home: true,
      f1: false,
      f2: false,
      f3: false,
      userid: '',
      confirmation: false,
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      phonenumber: '',
      ccnum : '',
      ccexp : '',
      cvv: '',
      billingzipcode: ''
    }

    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleNextF1 = this.handleNextF1.bind(this);
    this.handleNextF2 = this.handleNextF2.bind(this);
    this.handleNextF3 = this.handleNextF3.bind(this);
    this.handleConfirmation = this.handleConfirmation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleCheckout(e) {
    e.preventDefault()
    axios.post('/create', {})
    .then(({data}) => {
      this.setState({
        userid: data,
        home: false,
        f1 : true
      });
      console.log(this.state);
    })
    .catch(err => console.error('Could not create user'));
  }

  handleNextF1(e) {
    e.preventDefault()
    axios.post('/form', {
      userid : this.state.userid,
      f1: this.state.f1,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
     })
     .then(() => {
      this.setState({
        f1: false,
        f2 : true
      });
    })
    .catch((err) => console.error('Could not update user f1'));
  }

  handleNextF2(e) {
    e.preventDefault()
    axios.post('/form', {
      userid : this.state.userid,
      f2: this.state.f2,
      line1: this.state.line1,
      line2: this.state.line2,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      phonenumber: this.state.phonenumber
     })
     .then(() => {
        this.setState({
          f2: false,
          f3 : true
        });
     })
     .catch(err => console.error('Could not update user f2'))
  }

  handleNextF3(e) {
    e.preventDefault()
    axios
      .post('/form', {
        userid : this.state.userid,
        f3: this.state.f3,
        ccnum : this.state.ccnum,
        ccexp : this.state.ccexp,
        cvv: this.state.cvv,
        billingzipcode: this.state.billingzipcode
      })
      .then(() => {
        this.setState({
          f3: false,
          confirmation : true
        });
        //then get
      })
      .catch(err => console.error('Could not update user f3'));
  }

  handleConfirmation(e) {
    e.preventDefault()
    this.setState({
      home: true,
      confirmation : false
    });
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

   f1() {
    return (
      <form>
        <div>Name <input type="text" placeholder="John Doe" id="name" onChange={this.handleChange}></input></div>
        <div>Email <input placeholder="john@example.com" id="email" onChange={this.handleChange}></input></div>
        <div>Password <input type="password" id="password" onChange={this.handleChange}></input></div>
        <button onClick={this.handleNextF1}>Next</button>
      </form>
    )
  }

   f2() {
    return (
      <form>
        <h4>Address</h4>
        <div>Line 1 <input id="line1" onChange={this.handleChange}></input></div> 
        <div>Line 2 <input id="line2" onChange={this.handleChange}></input></div>
        <div>City <input placeholder="Los Angeles" id="city" onChange={this.handleChange}></input></div>
        <div>State <input placeholder="CA" id="state" onChange={this.handleChange}></input></div>
        <div>Zipcode <input placeholder="123456" id="zipcode" onChange={this.handleChange}></input></div>
        <div>Phone Number <input placeholder="123-456-7890" id="phonenumber" onChange={this.handleChange}></input></div>
        <button onClick={this.handleNextF2}>Next</button>
      </form>
    );
  }

  f3() {
    return (
      <form>
        <div>CC Number <input id="ccnum" onChange={this.handleChange}></input></div>
        <div>Expiry Date <input id="ccexp" onChange={this.handleChange}></input></div>
        <div>CVV <input id="cvv" onChange={this.handleChange}></input></div>
        <div>Billing Zipcode <input id="billingzipcode" onChange={this.handleChange}></input></div>
        <button onClick={this.handleNextF3}>Next</button>
      </form>
    );
  };

  confirmation() {
    return (
      <div>
        <h3>Confirm Information</h3>
        <div>name: {this.state.name}</div>
        <div>email: {this.state.email}</div>
        <div>password: {this.state.password}</div>
        <div>Address line 1: {this.state.line1}</div>
        <div>Adress line 2: {this.state.line2}</div>
        <div>city: {this.state.city}</div>
        <div>state: {this.state.state}</div>
        <div>zipcode: {this.state.zipcode}</div>
        <div>phone number: {this.state.phonenumber}</div>
        <div>cc num : {this.state.ccnum}</div>
        <div>cc exp : {this.state.ccexp}</div>
        <div>cvv: {this.state.cvv}</div>
        <div>billing zipcode: {this.state.billingzipcode}</div>
        <div><button onClick={this.handleConfirmation}>Purchase</button></div>
      </div>
    )
  }

  render() {
    const home = (
      <div>
      <h3>Multistep Checkout Experience</h3>
      <h3>Home</h3>
      <button onClick={this.handleCheckout}>Checkout</button>
      </div>
    );

    return (
      <div>
        { this.state.home ? home : null }
        { this.state.f1 ? this.f1() : null }
        { this.state.f2 ? this.f2() : null }
        { this.state.f3 ? this.f3() : null }
        { this.state.confirmation ? this.confirmation() : null }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));