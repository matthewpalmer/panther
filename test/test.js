var mocha = require('mocha')
  , expect = require('expect.js');

var panther = require('../panther')
  , data = require('../data');

describe('search', function() {
  it('should search for an exact given term', function(done) {
      panther.search(function(err, items) {
        expect(err).to.not.be.a(Error);
        expect(items).to.eql([{ id: '1', name: 'matt', age: '17' }]);
        done();
      }, 'matt', data);
  });
  
  it('should search for a partial given term', function(done) {
    panther.search(function(err, items) {
        expect(err).to.not.be.a(Error);
        console.log(items);
        expect(items).to.eql([{ id: '4', name: 'john', age: '22' }, { id: '5', name: 'joan', age: '43' }]);
        done();
      }, 'jo', data);
  });
  it('should error if no item found', function(done) {
    panther.search(function(err, items) {
      expect(err).to.be.a(Error);
      done();
    }, 'treqeeqwr', data);
  });
});