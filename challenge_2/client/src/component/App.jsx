import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      report: '',
      result: '',
    }
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
        //gets download but is not correct file
        // this.getCSV()
      })
      .catch( err => console.error(err));
    }
  }

  // getCSV() {
  //   // e.preventDefault()
  //   axios
  //     .get('/download', {})
  //     //gets file but cannot get it to download from link
  //     .then((file) => console.log(file))
  //     .catch(err => console.error(err));
  // }

  render() {
    return (
      <div>
      <h3>CSV Report Generator</h3>
        <form onSubmit={this.handleSubmit}>
          <div><input id="upload" type="file" accept=".json"></input></div>
          <div><button>Generate into CSV</button></div>
        </form>
        <a href="" download>Download CSV</a>
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