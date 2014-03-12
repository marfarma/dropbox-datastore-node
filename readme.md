#Dropbox SDK Datastore API for Node

The goal is to be (more or less) api equivalent implementation of the Dropbox SDK Datastore API - duck-typing, without replicating the browser implementation exactly. 

###Usage

```
var NDD = require('../src/dropbox-datastore-api');
var options = {
        app_key: '...',
        app_secret: '...',
        token: '...' 
    };
    
NDD.Datastore(config, function (err, datastore) {
  if (!err) {
  
    // use the datastore api
    
  }
});
    
```

### API - Replicates the Dropbox SDK Datastore API

  #### Datastore

  ##### class methods
  
  - datastore.int64(x)
  - datastore.isInt64(x)
  - datastore.isValidId(datastoreId)

  ##### instance methods
  
  - datastore.getTable(tableId) 
  - datastore.listTableIds() 
  - datastore.close() 
  - datastore.getId() 
  - datastore.getSyncStatus() 
 
  ##### TODO: event properties
  
  - //recordsChanged (Dropbox.Util.EventSource<Dropbox.Datastore.RecordsChanged>)
  - //syncStatusChanged (Dropbox.Util.EventSource<?>)
      
  ##### properties
  
  - datastore.DatastoreManager
  - datastore.DatastoreInfo

###TODO

- DatastoreManager
- Table
- Record
- Long polling for sync
- return promise