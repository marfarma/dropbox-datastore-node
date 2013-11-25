
/*
 * Dropbox datastore API for Node.js
 */

var https = require('https');
var querystring = require('querystring');

function DropboxDatastore(options){
    this.app_key = options.app_key;
    this.app_secret = options.app_secret;
    this.response_type = options.response_type;
    this.redirect_uri = options.redirect_uri;
    this._token = null;
    this.callback = function(res,fn) {
        var data = '';
        res.on('data',function(chunk) {
            data += chunk;
        });
        res.on('end',function() {
            fn(JSON.parse(data.toString()));
        });
    }
}

DropboxDatastore.prototype.authorize = function() {
    console.log('authorizing');
    var self = this;
    https.get({
        host: 'https://www.dropbox.com',
        path: '/1/oauth2/authorize?response_type=' + self.response_type + '&client_id=' + self.app_key + '&redirect_uri=' + self.redirect_uri
    },function(res){
        var fn = function() {console.log(res)};
        self.callback(res,fn);
    });
};

DropboxDatastore.prototype.getToken = function(bearer,fn) {
    console.log('getting token');
    var self = this;
    var auth = {
        redirect_uri: this.redirect_uri,
        client_id: this.app_key,
        client_secret: this.app_secret,
        grant_type: 'authorization_code',
        code: bearer
    };
    var authString = querystring.stringify(auth);
    var req = https.request({
        method: 'POST',
        host: 'api.dropbox.com',
        path: '/1/oauth2/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    },function(res){
        var callback = function(auth) {
            self._token = auth.access_token;
            fn(auth);
        };
        self.callback(res,callback);
    });
    req.write(authString);
    req.end();
};

DropboxDatastore.prototype.getInfo = function(fn) {
    console.log('getting info');
    var self = this;
    var req = https.request({
        method: 'GET',
        host: 'api.dropbox.com',
        path: '/1/account/info',
        headers: {
            'Authorization': 'Bearer ' + self._token
        }
    },function(res){
        self.callback(res,fn);
    });
    req.end();
};

DropboxDatastore.prototype.listDatastores = function(fn) {
    console.log('listing datastores');
    var self = this;
    var req = https.request({
        method: 'GET',
        host: 'api.dropbox.com',
        path: '/1/datastores/list_datastores',
        headers: {
            'Authorization': 'Bearer ' + self._token
        }
    },function(res){
        self.callback(res,fn);
    });
    req.end();
};

DropboxDatastore.prototype.getCreateDatastore = function(datastore,fn) {
    console.log('creating/getting datastore ' + datastore);
    var self = this;
    var data = {
        dsid: datastore
    };
    var dataString = querystring.stringify(data);
    var req = https.request({
        method: 'POST',
        host: 'api.dropbox.com',
        path: '/1/datastores/get_or_create_datastore',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + self._token
        }
    },function(res){
        self.callback(res,fn);
    });
    req.write(dataString);
    req.end();
};

DropboxDatastore.prototype.retrieveSnapshot = function(h,fn) {
    console.log('creating/getting snapshot of ' + h);
    var self = this;
    var data = {
        handle: h
    };
    var dataString = querystring.stringify(data);
    var req = https.request({
        method: 'POST',
        host: 'api.dropbox.com',
        path: '/1/datastores/get_snapshot',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + self._token
        }
    },function(res){
        self.callback(res,fn);
    });
    req.write(dataString);
    req.end();
};

DropboxDatastore.prototype.putDelta = function(handle_id,change_string,fn) {
    console.log('creating new record');
    var self = this;
    var data = {
        handle: handle_id,
        rev: 0,
        changes: change_string
    };
    var dataString = querystring.stringify(data);
    console.log(dataString);
    var req = https.request({
        method: 'POST',
        host: 'api.dropbox.com',
        path: '/1/datastores/put_delta',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + self._token
        }
    },function(res){
        self.callback(res,fn);
    });
    req.write(dataString);
    req.end();
};

DropboxDatastore.prototype.deleteDatastore = function(handle_id,fn) {
    console.log('deleting datastore ' + handle_id);
    var self = this;
    var data = {
        handle: handle_id,
    };
    var dataString = querystring.stringify(data);
    console.log(dataString);
    var req = https.request({
        method: 'POST',
        host: 'api.dropbox.com',
        path: '/1/datastores/delete_datastore',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + self._token
        }
    },function(res){
        self.callback(res,fn);
    });
    req.write(dataString);
    req.end();
};

module.exports = DropboxDatastore;
