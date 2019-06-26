class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      home: true,
      f1: false,
      f2: false,
      f3: false,
      confirmation: false,
      data: {
        name: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        ccnum : '',
        ccexp : '',
        cvv: '',
        zipcode: ''
      }
    }
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleCheckout(e) {
    e.preventDefault()
    //direct to f1
    this.setState({
      home: false,
      f1 : true
    });
  }

   f1() {
    return (
      <form>
      Name
      <div><input></input></div>
      Email
      <div><input></input></div>
      Password
      <div><input></input></div>
      <button>Next</button>
      </form>
    )
  }

   f2() {
    return (
      <form>
      <input>Ship to address (line 1, line 2, city, state, zip code) </input>
      <input>Phone Number</input>
      <button>Next</button>
      </form>
    );
  }

  f3() {
    return (
      <form>
      <input>ccnum</input>
      <input>ccexp</input>
      <input>cvv</input>
      <input>zipcode</input>
      <button>Next</button>
      </form>
    );
  };

  confirmation() {
    return (
      <div>
      summarize data
      <button>Purchase -> Returns to home page</button>
      </div>
    )
  }

  render() {
    const home = (
      <div>
      <h3>Multistep Checkout Experience</h3>
      <button onClick={this.handleCheckout}>Checkout</button>
      </div>
    );

    return (
      <div>
        { this.state.home ? home : null }
        { this.state.f1 ? this.f1() : null }
      </div>
    );
  }
  
}

ReactDOM.render(<App />, document.getElementById('app'));