#Node.js wrapper for Dropbox Datastore API

###Usage

Just a bunch of sample options, the full documentation will come.
```
var DropboxDatastore = require('../src/dropbox-datastore-node');
var options = {
        app_key: '...',
        app_secret: '...',
        response_type: 'code',
        redirect_uri: 'http://localhost:3000/' // The / is the path and is required
    };
var datastore = new DropboxDatastore(options);
```

###Methods

datastore.getInfo(fn(data));

datastore.listDatastore(fn(data));

datastore.getCreateDatastore(NAME,fn(data));

datastore.retrieveSnapshot(HANDLE,fn(data));

datastore.putDelta(HANDLE,CHANGES,fn(data));

datastore.deleteDatastore(HANDLE,fn(data));

###TODO
Implementing all the endpoint of the current API
Simplyfying the put_delta endpoint to make CRUD operations easier
