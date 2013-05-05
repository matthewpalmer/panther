var mocha = require('mocha')
  , expect = require('expect.js');

var search = require('../search')
  , data = require('../data');

describe('search', function() {
  it('should search for an exact given term', function(done) {
      search.search(function(err, items) {
        console.log(err, items);
        expect(err).to.not.be.a(Error);

        expect(items).to.eql({ id: '1', name: 'matt', age: '17' });
        done();
      }, 'matt', data);
  });
  it('should search for a partial given term', function(done) {
    search.search(function(err, items) {
        expect(err).to.not.be.a(Error);
        console.log(items);
        expect(items).to.eql({ id: '4', name: 'john', age: '22' });
        done();
      }, 'jo', data);
  });
  //needs to throw an error if no item found
});