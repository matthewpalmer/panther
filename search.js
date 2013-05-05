var data = require('./data');

function search(callback, searchTerm, inputArray) {
  for (var e in inputArray) {
    (function(i) {
      for (var y in inputArray[i]) {
        var t = inputArray[e][y].indexOf(searchTerm);
        if (t !== -1) {
          callback(null, inputArray[e]);
        } else {
          
        }
      }
    })(e)
  } 
}

module.exports = {
  search: search
}