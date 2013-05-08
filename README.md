Panther is a way to search through an array of JSON objects and get returned an array of matching JSON objects.

__`npm install panther`__

__Example__ (see also: example.js)

```javascript
var panther = require('panther');
//data is an array of JSON objects
var data = [{name:'matt', age:'17'}, {name:'oscar':age:'73'}];
var searchTerm = 'matt';

panther.search(function(err, items) {
  if (err) {
    console.log(err);
  } else {
    console.log(items); //items is an array of matching JSON objects
  }
}, searchTerm, data);
```