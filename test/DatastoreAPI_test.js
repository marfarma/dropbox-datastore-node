"use strict";

var chai = require('chai'),
    //chaiAsPromised = require('chai-as-promised'),
    should = chai.should(),
    config = require("./config.json"),
    nock = require("nock"),
    config = require("./config.json"),
    NDD = require('../src/dropbox-datastore-api');

//chai.use(chaiAsPromised);
  
describe('NDD.DatastoreAPI', function () {
  var ds = {};
  
  before(function (done) {
    config.id = 'test';
    NDD.Datastore(config, function (err, datastore) {
      if (!err) {
        ds = datastore;
      }
      done();
    });
  });

  describe('int64', function () {
    it('should have an int64 class method', function () {
      ds.should.respondTo('int64');
    });
    
    it('should have an isInt64 class method', function () {
      ds.should.respondTo('isInt64');
    });
    
    it('should return an int64 object', function () {
      var x = ds.int64(0x9abcdef0);
      x.toString(16).should.equal('9abcdef0');
    });
    
    it('should recognize an int64 object', function () {
      var x = ds.int64(0x123456789);
      ds.isInt64(x).should.equal(true);
    });
    
    it('should recognize a non-int64 object', function () {
      var x = 23456789;
      ds.isInt64(x).should.equal(false);
    });
  });
  
  describe('isValidId', function () {
    it('should have a isValidId class method', function () {
      ds.should.respondTo('isValidId');
    });
    it('undefined should be invalid', function () {
      var id;
      ds.isValidId(id).should.equal(false);
    });
    it('empty string should be invalid', function () {
      var id = '';
      ds.isValidId(id).should.equal(false);
    });
    it('number should be invalid', function () {
      var id = 1;
      ds.isValidId(id).should.equal(false);
    });
    it('object should be invalid', function () {
      var id = {};
      ds.isValidId(id).should.equal(false);
    });
    it('function should be invalid', function () {
      var id = function () {};
      ds.isValidId(id).should.equal(false);
    });
    
    // type1 begins with a '.'
    it('type1 and containing a . should be invalid', function () {
      var id = '.abc.xyz-xyz_abc';
      ds.isValidId(id).should.equal(false);
    });
    it('type1 and length > 100 characters should be invalid', function () {
      var fifty_chars = 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',
          id = '.' + fifty_chars + fifty_chars;
      console.log(id.length);
      ds.isValidId(id).should.equal(false);
    });
    it('type1 and containing upper case characters should be valid', function () {
      var id = '.abcXyz-xyz_abc';
      ds.isValidId(id).should.equal(true);
    });
    
    // type2 does not begin with a '.'
    it('type2 and containing a . should be valid', function () {
      var id = 'abc.xy00z';
      ds.isValidId(id).should.equal(true);
    });
    it('type2 and length > 32 characters should be invalid', function () {
      var thirtytwo_chars = 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',
          id = 'a' + thirtytwo_chars;
      console.log(id.length);
      ds.isValidId(id).should.equal(false);
    });
    it('type2 and containing upper case characters should be invalid', function () {
      var id = 'abc.Xyz';
      ds.isValidId(id).should.equal(false);
    });
    
  });
  
  it('should have a getTable instance method', function () {
    ds.should.respondTo('getTable');
  });
  
  it('should have a listTableIds instance method', function () {
    ds.should.respondTo('listTableIds');
  });
  
  it('should have a close instance method', function () {
    ds.should.respondTo('close');
  });
  
  it('should have a getId instance method', function () {
    ds.should.respondTo('getId');
  });
  
  it('should return the id', function () {
    ds.getId().should.equal('test');
  });
  
  it('should have a getSyncStatus instance method', function () {
    ds.should.respondTo('getSyncStatus');
  });
  
  it('should have a DatastoreManager property', function () {
    ds.should.have.property('DatastoreManager');
  });
  
  it('should have a DatastoreInfo property', function () {
    ds.should.have.property('DatastoreInfo');
  });
  
  it.skip('should emit a recordsChanged event', function () {
      //recordsChanged (Dropbox.Util.EventSource<Dropbox.Datastore.RecordsChanged>)
  });
  
  it.skip('should emit a syncStatusChanged event', function () {
      //syncStatusChanged (Dropbox.Util.EventSource<?>)
  });
    
});


