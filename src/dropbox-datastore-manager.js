"use strict";
var DropboxDatastore = require('../src/dropbox-datastore-node');

function DatastoreManager() {
  this.app = this.app || process.env.DROPBOX_APP;
  this.key = this.key || process.env.DROPBOX_KEY;
  
  // app owner's token for server wide use
  // client tokens used for client specific data access
  // use datastore name of 'server' for server settings tables
  // and user list
  
  this.token = this.key || process.env.DROPBOX_TOKEN;
  
  this.datastores = {};
  
  this.close = function () {
    for (var ds in this.datastores) {
      ds.close();
    }
  }.bind(this);
  
  this.openDefaultDatastore = function (callback) {
    // datastore.getDefaultDatastore('default',function(data) {
    //     if (!!data.handle) {
    //         done();
    //     } else {
    //         throw new Error('No data received');
    //     }
    // });
  }.bind(this);
  
  this.openDatastore = function (datastoreId, callback) {
    // datastore.getDatastore(datastoreId, function(data) {
    //      if (!!data.handle) {
    //          done();
    //      } else {
    //          throw new Error('No data received');
    //      }
    // });
  }.bind(this);
  
  this.getOrCreateDatastore = function (datastoreId, callback) {
    // datastore.getCreateDatastore(datastoreId, function(data) {
    //      if (!!data.handle) {
    //         // Assing handle to a temporary 
    //          global._handle = data.handle;
    //          done();
    //      } else {
    //          throw new Error('No data received');
    //      }
    // });
  }.bind(this);
  
  this.createDatastore = function (callback) {
    // datastore.createDatastore('test',function(data) {
    //      if (!!data.handle) {
    //         // Assing handle to a temporary 
    //          global._handle = data.handle;
    //          done();
    //      } else {
    //          throw new Error('No data received');
    //      }
    // });
  }.bind(this);
  
  this.deleteDatastore = function (datastoreId, callback) {
    // datastore.deleteDatastore(datastoreId,function(data) {
    //     console.log(data);
    //     if (!!data.ok) {
    //         done();
    //     } else {
    //         throw new Error('No data received');
    //     }
    // });
  }.bind(this);
  
  this.listDatastores = function (callback) {
      this.ds.listDatastores(callback(data));
  }.bind(this);
                  
  // Events
  //     datastoreListChanged (Dropbox.Util.EventSource<Dropbox.Datastore.DatastoreListChanged>)
  //     to listen: DatastoreManager.datastoreListChanged.addListener()
  // 
  //     Dropbox.Datastore.DatastoreListChanged
  //             Array<String> getDatastoreInfos()
  //                 Returns a list containing current Dropbox.Datastore.DatastoreInfo 
  //                 objects for all datastores that your app can access.
  //                 

  this.datastore = function (config) {
    // config contains token when request is for a specific user
    var config.token = config.token || this.token,
        dsIndex = config.id + config.token;
        
    // id is unique for user + app, need token
    if (typeof this.datastores[dsIndex] === 'undefined') {
      // get or create datastore using config
      // config.ds = datastore;
      this.datastores[dsIndex] = config;
    }
    
    return this.datastores[dsIndex];
  }.bind(this);
  
}
DatastoreManager.prototype.DatastoreManager = DatastoreManager;

module.exports = exports = new DatastoreManager();