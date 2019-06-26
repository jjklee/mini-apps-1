import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      report: '',
      result: ''
    }
    this.generateReport = this.generateReport.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.getCSV = this.getCSV.bind(this);
  }

  generateReport(e) {
    e.preventDefault()
    let report = this.state.report;
    let parsedReport = JSON.parse(report);
    axios
      .post('/generator', {
        report: parsedReport
      })
      .then(({data}) => {
        this.setState({ result: data });
      })
      .catch( err => console.error(err));
  }

  onChange(e) {
    this.setState({ report: e.target.value });
  }

  // getCSV() {
  //   axios
  //     .get('./generator')
  //     .then(() => console.log('in getCSV'))
  //     .catch(err => console.error(err));
  // }

  render() {
    return (
      <div>
      <h3>CSV Report Generator</h3>
        <form>
          <div><textarea onChange={(e) => this.onChange(e)}></textarea></div>
          <div><input type="file" accept=".csv"></input></div>
          <div><button onClick={(e) => this.generateReport(e)}>Generate into CSV</button></div>
        </form>
        <div>
          <h4 className="input">Input: {this.state.report}</h4>
          <h4 className="output">Output: {this.state.result}</h4>
        </div>
        <a href="">Download CSV</a>
      </div>
    )
  }
}

export default App;
