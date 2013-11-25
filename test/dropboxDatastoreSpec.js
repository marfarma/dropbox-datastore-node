var assert = require("assert");
var DropboxDatastore = require('../src/dropbox-datastore-node');
global._token = 'y-8E3SDJgGMAAAAAAAAAAdOLY36768xtn9AUbLA1-jtwhEFGv2jHXs2m5X5FgdoI'; // Test token

describe('DropboxDatastoreTest', function(){
    var options = {
        app_key: 'skt9hjvq37sid0x',
        app_secret: '5accd160dez5959',
        response_type: 'code',
        redirect_uri: 'http://localhost:3000/' // The / is the path and is required
    };

    var datastore = new DropboxDatastore(options);
    
    it('should take options', function(){
        assert.equal(datastore.app_key, options.app_key);
    });

    it('should authorize with token', function(done){
        datastore.getToken('jrL3ybkwhPcAAAAAAAAAAfq6r3tipgcnO9KXuGIb-BI',function(auth){
            if (!!datastore._token) {
                console.log('got token: ' + datastore._token);
                done();
            } else {
                throw new Error('Token not received');
            }
        });
    });


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
            console.log(data);
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
            console.log(data);
            if (!!data.ok) {
                done();
            } else {
                throw new Error('No data received');
            }
        });
    });





});
