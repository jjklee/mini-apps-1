import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      report: 'input',
      result: 'output'
    }
  }

  generateReport(e) {
    e.preventDefault()
    axios
      .post('/generator', {
        report: this.state.report
      })
      .then(this.getReport())
      .catch( err => console.error(err));
  }

  getReport() {
    axios
      .get('/generator')
      .then(data => {
        this.setState({ result: data.data.memes });
      })
      .catch()
  }

  onChange(e) {
    this.setState({ report: e.target.value });
  }

  render() {
    return (
      <div>
      CSV Report Generator
        <form>
          <div><textarea onChange={(e) => this.onChange(e)}></textarea></div>
          <div><button onClick={(e) => this.generateReport(e)}>Submit</button></div>
        </form>
        <div>
          <h3>{this.state.report}</h3>
          <h3>{this.state.result}</h3>

        </div>
      </div>
    )
  }
}

export default App;