#Node.js wrapper for Dropbox Datastore API

###Usage

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

###Testing

The test need the config file which contains the app key and secret.
For easy testing I also included an access token which is used for testing.

```
exports.options = {
    app_key: '...',
    app_secret: '...',
    response_type: 'code',
    redirect_uri: 'http://localhost:3000/' // The / is the path and is required
};

exports.test_token = 'y-8E3SDJgGMAAAAAAAAAAdOLY39769xtn9AUbLA1-jtwhEHGv2jHXs2m5X6FgddI'; // Test token
```

###TODO
Implementing all the endpoint of the current API
Simplyfying the put_delta endpoint to make CRUD operations easier
