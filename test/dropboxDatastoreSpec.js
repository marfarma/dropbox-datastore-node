var assert = require("assert");
var config = require("./config");
var DropboxDatastore = require('../src/dropbox-datastore-node');

global._token = config.test_token;

describe('DropboxDatastoreTest', function(){
    var options = config.options 
    var datastore = new DropboxDatastore(options);
    
    it('should take options', function(){
        assert.equal(datastore.app_key, options.app_key);
    });

/*
 * Get a bearer token first
 * 
    it('should authorize with token', function(done){
        datastore.getToken(bearer_token,function(auth){
            if (!!datastore._token) {
                console.log('got token: ' + datastore._token);
                done();
            } else {
                throw new Error('Token not received');
            }
        });
    });
*/

    it('should call the info api', function(done){
        datastore._token =  global._token;      
        datastore.getInfo(function(data) {
            if (!!data.uid) {
                done();
            } else {
                throw new Error('No data received');
            }
        });

    });

    it('should list datastores', function(done){
        datastore._token =  global._token;      
        datastore.listDatastores(function(data) {
            if (!!data.datastores) {
                done();
            } else {
                throw new Error('No data received');
            }
        });

    });

    
    it('should create datastore', function(done){
        datastore._token =  global._token;      
        datastore.getCreateDatastore('test',function(data) {
            if (!!data.handle) {
               // Assing handle to a temporary 
                global._handle = data.handle;
                done();
            } else {
                throw new Error('No data received');
            }
        });
    });

    it('should get datastores', function(done){
        datastore._token =  global._token;      
        datastore.getDatastore('test',function(data) {
            if (!!data.handle) {
                done();
            } else {
                throw new Error('No data received');
            }
        });
    });
    
    it('should retrieve a snapshot', function(done){
        datastore._token =  global._token;      
        datastore.retrieveSnapshot(global._handle,function(data) {
            if (!!data) {
                done();
            } else {
                throw new Error('No data received');
            }
        });
    });

    it('should add a record', function(done){
        datastore._token =  global._token;      
        var changes = '[["I", "tasks", "myrecord", {"taskname": "do laundry", "completed": false}]]';
        datastore.putDelta(global._handle,changes,function(data) {
            //console.log(data);
            if (!!data) {
               // Assing handle to a temporary 
                done();
            } else {
                throw new Error('No data received');
            }
        });
    });
    
    it('should get delta', function(done){
        datastore._token =  global._token;    
        var rev = 0;  
        datastore.getDeltas(global._handle,rev,function(data) {
            //console.log(data);
            if (!!data) {
               // Assing handle to a temporary 
                done();
            } else {
                throw new Error('No data received');
            }
        });
    });

    it('should remove a datastore', function(done){
        datastore._token =  global._token;      
        var changes = '[["I", "tasks", "myrecord", {"taskname": "do laundry", "completed": false}]]';
        datastore.deleteDatastore(global._handle,function(data) {
            //console.log(data);
            if (!!data.ok) {
                done();
            } else {
                throw new Error('No data received');
            }
        });
    });





});
