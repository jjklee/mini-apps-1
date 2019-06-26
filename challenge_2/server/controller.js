const generateReport = ({ report }) => {
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
  return output;
}

module.exports = { generateReport }