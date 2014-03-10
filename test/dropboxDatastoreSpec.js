var assert = require("assert"),
    config = require("./config.json"),
    nock = require("nock"),
    DropboxDatastore = require('../src/dropbox-datastore-node');

nock.recorder.rec();
global._token = config.test_token;

describe('DropboxDatastoreTest', function(){
    var options = config.options 
    var datastore = new DropboxDatastore(options);
    
    it('should take options', function(){
        assert.equal(datastore.app_key, options.app_key);
    });


    /*
    Get a bearer token first
   
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
    
    it('should add a record', function(done){
        datastore._token =  global._token;      
        var changes = '[' +
            '["I", "tasks", "myrecord1", {"taskname": "do laundry", "completed": false}],' +
            '["I", "tasks", "myrecord2", {"taskname": "pay mortgage", "completed": false}],' +
            '["I", "tasks", "myrecord3", {"taskname": "buy milk", "completed": false}],' +
            '["I", "tasks", "myrecord4", {"taskname": "annual check-up", "completed": false}],' +
            '["I", "tasks", "myrecord5", {"taskname": "file taxes", "completed": false}]' +
            ']',
            rev=0;
        // handle_id,rev,change_string,fn
        datastore.putDelta(global._handle,rev,changes,function(data) {
            //console.log(data);
            if (!!data) {
               assert.equal(data.rev, (rev + 1));
               console.log(data);
               // Assing handle to a temporary 
                done();
            } else {
                throw new Error('No data received');
            }
        });
    });
    
    it('should update a record', function(done){
        datastore._token =  global._token;      
        var changes = '[["U", "tasks", "myrecord1", {"completed": ["P", true]}]]',
            rev = 1;
        datastore.putDelta(global._handle,rev,changes,function(data) {
            //console.log(data);
            if (!!data) {
               assert.equal(data.rev, (rev + 1));
               console.log(data);
               // Assing handle to a temporary 
                done();
            } else {
                throw new Error('No data received');
            }
        });
    });

    it('should update a record and add a property', function(done){
        datastore._token =  global._token;      
        var changes = '[["U", "tasks", "myrecord1", {"completed": ["P", true],"completion": ["P","20130310"]}]]',
            rev = 2;
        datastore.putDelta(global._handle,rev,changes,function(data) {
            //console.log(data);
            if (!!data) {
               assert.equal(data.rev, (rev + 1));
               console.log(data);
               // Assing handle to a temporary 
                done();
            } else {
                throw new Error('No data received');
            }
        });
    });

    it('should update a record and delete a property', function(done){
        datastore._token =  global._token;      
        var changes = '[["U", "tasks", "myrecord1", {"completed": ["P", false],"completion": ["D"]}]]',
            rev = 3;
        datastore.putDelta(global._handle,rev,changes,function(data) {
            //console.log(data);
            if (!!data) {
               assert.equal(data.rev, (rev + 1));
               console.log(data);
               // Assing handle to a temporary 
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

    it('should delete a record', function(done){
        datastore._token =  global._token;      
        var changes = '[' +
            '["D", "tasks", "myrecord2"],' +
            '["D", "tasks", "myrecord3"],' +
            '["D", "tasks", "myrecord4"] ' +
            ']',
            rev=4;
        datastore.putDelta(global._handle,rev, changes,function(data) {
            //console.log(data);
            if (!!data) {
               assert.equal(data.rev, (rev + 1));
               console.log(data);
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
