"use strict";
var DropboxDatastore = require('../src/dropbox-datastore-node');

// TODO place extend in a util module

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}

function DatastoreManager() {
  this.datastores = {};

  // manager isn't initialized until the first datastore access
  // TODO: check that config options match if existing ds is returned
  this.datastore = function (config) {
    var id = config.id;
    var options = config.options;
    
    if (typeof this.datastores[config.id] === 'undefined') {
      var ds = new DropboxDatastore(options);
      ds._token = config.token;
      this.datastores[id] = extend({ds: ds},config);
    }
    
    return this.datastores[id];
  }.bind(this);
  
}
DatastoreManager.prototype.DatastoreManager = DatastoreManager;

module.exports = exports = new DatastoreManager();