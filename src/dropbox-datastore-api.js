"use strict";

var Int64 = require('node-int64'),
    DropboxDatastoreManager = require('../src/dropbox-datastore-manager'),
    NDD = {
  Datastore: Datastore
};

function Datastore(config, fn) {
  
  if (!(this instanceof NDD.Datastore)) {
    return new Datastore(config, fn);
  }
  this.DatastoreManager = DropboxDatastoreManager; 
  
  this.datastore = function (name) {
    if (typeof this.ds === 'undefined') {
      this.ds = this.DatastoreManager.datastore(name);
      // TODO: get snapshot of datastore
      // parse results and initialize tables
      // send a table data collection change event 
      // for each table when loaded
      // send a sync change event when done
    }
  }.bind(this);
  
  // pass config into Datastore manager - it will create it 
  // unless it already exists - singleton type thing
  // TODO: Create Manager, attempt to get datastore from manager,
  // pass config into manager, open datastore there,
  // var options = config.options 
  // var datastore = new DropboxDatastore(options);

  this.DatastoreInfo = {};
  this.DatastoreInfo.id = config.id;
  
  this.DatastoreInfo.getId = function () { 
    return this.DatastoreInfo.id; 
  }.bind(this.DatastoreInfo);
  
  this.getId = function () { 
    return this.DatastoreInfo.getId(); 
  }.bind(this);

  this.tables = {};
  this.getTable = function (tableId) {
    if (typeof this.tables[tableId] === 'undefined') {
      this.tables[tableId] = {};
    }
    return this.tables[tableId];
  }.bind(this);
  
  this.listTableIds = function () { 
    return Object.keys(this.tables); 
  }.bind(this);

  this.close = function () {
    // wait until 'updating' is not true
    // dispose of all tables
    // send events?
  };
  this.getSyncStatus = function () {};
 
  // properties that represent available events
  //recordsChanged (Dropbox.Util.EventSource<Dropbox.Datastore.RecordsChanged>)
  //syncStatusChanged (Dropbox.Util.EventSource<?>)
      
  if (typeof fn === 'function') {
    fn(null, this);
  } else {
    return this;
  }
}

Datastore.prototype.int64 = function (x) { return new Int64(x); };
Datastore.prototype.isInt64 = function (x) { return x instanceof Int64; };

Datastore.prototype.isValidId = function (datastoreId) {
  var match2 = '^[a-z|\\d|\\-|_]+([a-z|\\d|\\-|_|\\.]*)$',
      match1 = '^\\.+([a-z|A-Z|\\d|\\-|_]*)$';

  if (!datastoreId || typeof datastoreId !== 'string') {
    return false;
  }
  if (datastoreId.match(match1) && datastoreId.length <= 100) { return true; }
  if (datastoreId.match(match2) && datastoreId.length <= 32) { return true; }
  return false; 
  
};

module.exports = NDD;