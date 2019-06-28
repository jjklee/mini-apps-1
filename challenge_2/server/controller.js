const fs = require('fs');
const path = require('path');

// const generateReport = ({ report }) => {
//   let output = Object.keys(report).join(',').replace(',children', '');
//   output += '\n' + Object.values(report).join(',').replace(/,\[object Object\]/g, '') + '\n';
  
//   const getChildren = (r) => {
//     if (r.children.length === 0) {
//       return;
//     }
//     for(let i = 0; i< r.children.length; i++) {
//       let values = Object.values(r.children[i]);
//       let filteredValues = values.filter(a => typeof a === 'string')
//         output += filteredValues.join(',') + '\n';
        
//       if (r.children.length > 0) {
//         getChildren(r.children[i]);
//       }
//     }
//   }
//   getChildren(report);
//   makeCSV(output);
//   return output;
// }

const generateReport = (req, res) => {
  let report = req.body.report;
  let output = Object.keys(report).join(',').replace(',children', '');
  output += '\n' + Object.values(report).join(',').replace(/,\[object Object\]/g, '') + '\n';
  
  const getChildren = (r) => {
    if (r.children.length === 0) {
      return;
    }
    for(let i = 0; i< r.children.length; i++) {
      let values = Object.values(r.children[i]);
      let filteredValues = values.filter(a => typeof a === 'string')
        output += filteredValues.join(',') + '\n';
        
      if (r.children.length > 0) {
        getChildren(r.children[i]);
      }
    }
  }
  getChildren(report);
  makeCSV(output);

  res.setHeader('Content-disposition', 'attachment; filename=test.csv');
  res.set('Content-Type', 'text/csv');
  res.status(200).send(output);
}

const makeCSV = (text) => {
  let filePath = path.join(__dirname, 'report', 'test.csv');
  fs.writeFile(filePath, text, function(err) {
    if(err) {
      return console.log(err);
    } else {
      console.log("The file was saved!");
    }
  }); 
}

module.exports = { generateReport }