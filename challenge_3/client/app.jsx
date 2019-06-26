class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      home: true,
      f1: false,
      f2: false,
      f3: false,
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

  //conditional rendering
  handleCheckout(e) {
    e.preventDefault()
    this.setState({
      home: false,
      f1 : true
    });
  }

  handleNextF1(e) {
    e.preventDefault()
    this.setState({
      f1: false,
      f2 : true
    });
  }

  handleNextF2(e) {
    e.preventDefault()
    this.setState({
      f2: false,
      f3 : true
    });
  }

  handleNextF3(e) {
    e.preventDefault()
    axios
      .post('/form', { userdata: this.state })
      .then( () => {
        this.setState({
          f3: false,
          confirmation : true
        });
      })
      .catch(err => console.error(err));
  }

  handleConfirmation(e) {
    e.preventDefault()
    this.setState({
      home: true,
      confirmation : false
    });
  }

  handleChange(e) {
    let id = e.target.id;
    let value = e.target.value
    if(id === 'name') {
      this.setState({ name: value })
    } else if (id === 'email') {
      this.setState({ email: value })
    } else if (id === 'password') {
      this.setState({ password: value })
    } else if (id === 'line1') {
      this.setState({ line1: value })
    } else if (id === 'line2') {
      this.setState({ line2: value })
    } else if (id === 'city') {
      this.setState({ city: value })
    } else if (id === 'state') {
      this.setState({ state: value })
    } else if (id === 'zipcode') {
      this.setState({ zipcode: value })
    } else if (id === 'phonenumber') {
      this.setState({ phonenumber: value })
    } else if (id === 'ccnum') {
      this.setState({ ccnum: value })
    } else if (id === 'ccexp') {
      this.setState({ ccexp: value })
    } else if (id === 'cvv') {
      this.setState({ cvv: value })
    } else if (id === 'billingzipcode') {
      this.setState({ billingzipcode: value })
    }
  }

   f1() {
    return (
      <form>
        Name
        <div><input type="text" placeholder="John Doe" id="name" onChange={this.handleChange}></input></div>
        Email
        <div><input placeholder="john@example.com" id="email" onChange={this.handleChange}></input></div>
        Password
        <div><input type="password" id="password" onChange={this.handleChange}></input></div>
        <button onClick={this.handleNextF1}>Next</button>
      </form>
    )
  }

   f2() {
    return (
      <form>
        <h4>Address</h4>
        Line 1
        <div><input id="line1" onChange={this.handleChange}></input></div>
        Line 2
        <div><input id="line2" onChange={this.handleChange}></input></div>
        City 
        <div><input placeholder="Los Angeles" id="city" onChange={this.handleChange}></input></div>
        State 
        <div><input placeholder="CA" id="state" onChange={this.handleChange}></input></div>
        Zipcode 
        <div><input placeholder="123456" id="zipcode" onChange={this.handleChange}></input></div>
        Phone Number
        <div><input placeholder="123-456-7890" id="phonenumber" onChange={this.handleChange}></input></div>
        <button onClick={this.handleNextF2}>Next</button>
      </form>
    );
  }

  f3() {
    return (
      <form>
        CC Number
        <div><input id="ccnum" onChange={this.handleChange}></input></div>
        Expiry Date
        <div><input id="ccexp" onChange={this.handleChange}></input></div>
        CVV
        <div><input id="cvv" onChange={this.handleChange}></input></div>
        Billing Zipcode
        <div><input id="billingzipcode" onChange={this.handleChange}></input></div>
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
        <div>line1: {this.state.line1}</div>
        <div>line2: {this.state.line2}</div>
        <div>city: {this.state.city}</div>
        <div>state: {this.state.state}</div>
        <div>zipcode: {this.state.zipcode}</div>
        <div>phonenumber: {this.state.phonenumber}</div>
        <div>ccnum : {this.state.ccnum}</div>
        <div>ccexp : {this.state.ccexp}</div>
        <div>cvv: {this.state.cvv}</div>
        <div>billingzipcode: {this.state.billingzipcode}</div>
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