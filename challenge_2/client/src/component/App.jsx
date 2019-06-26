import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      report: '',
      result: '',
    }
    // this.generateReport = this.generateReport.bind(this);
    // this.onChange = this.onChange.bind(this);
    // this.getCSV = this.getCSV.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    let file = document.getElementById('upload').files[0];

    var fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = (evt) => {
      this.setState({ report : evt.target.result})
      // document.getElementById("fileContents").innerHTML = evt.target.result;
      var report = JSON.parse(evt.target.result);
      axios
      .post('/generator', {
        report
      })
      .then(({data}) => {
        this.setState({ result: data });
      })
      .catch( err => console.error(err));
    }
  }

  getCSV(e) {
    e.preventDefault()
    axios
      .get('./generator')
      .then( (file) => console.log('====', file))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
      <h3>CSV Report Generator</h3>
        <form onSubmit={this.handleSubmit}>
          <div><input id="upload" type="file" accept=".json"></input></div>
          <div><button>Generate into CSV</button></div>
        </form>
        <a href="" onClick={this.getCSV} download>Download CSV</a>
        <div id='input'>Input:</div>
        <div id="fileContents">{this.state.report} </div>
        <br />
        <div id='output'>Output:</div>
        <div>{this.state.result}</div>
      </div>
    )
  }
}

export default App;
