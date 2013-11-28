/**
 * Dropbox datastore API for Node.js
 * 
 * Node.js wrapper for Dropbox datastore API 
 *
 * @author Daniele Piccone mail@danielepiccone.com
 * @version 0.0.1
 * @license MIT
 */

var https = require('https');
var querystring = require('querystring');

/**
 * Build the datastore client
 *
 * Usage: 
 *  var datastore = new DropboxDatastore(options);
 * 
 * @param {object} Options an object with all the options
 */

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

/*
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
*/

/**
 * Get the access token for accessing the API
 *
 * @param {string} bearer the bearer token received from the oAuth dialog
 * @param {function} fn the callback to execute with the received data fn(data)
 */

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

/**
 * Get the information about a Dropbox Account
 * 
 * @param {function} fn callback function(data)
 */

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

/**
 * List datastores for the current user
 * 
 * @param {function} fn callback function(data)
 */

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

/**
 * Check the datastore ID and return revision and handle
 * 
 * @param {function} fn callback function(data)
 */

DropboxDatastore.prototype.getDatastore = function(dsid,fn) {
    console.log('getting datastores');
    var self = this;
    var req = https.request({
        method: 'GET',
        host: 'api.dropbox.com',
        path: '/1/datastores/get_datastore?dsid='+dsid,
        headers: {
            'Authorization': 'Bearer ' + self._token
        }
    },function(res){
        self.callback(res,fn);
    });
    req.end();
};

/**
 * Create a new datastore
 * 
 * @param {string} datastore the name of the datastore
 * @param {function} fn callback function(data)
 */

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

/**
 * Retrieve a snapshot of the datastore
 * 
 * @param {string} handle_id the handle of the datastore
 * @param {function} fn callback function(data)
 */

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

/**
 * Alter the datastore state
 * 
 * @param {string} handle_id the name of the datastore
 * @param {string} change_string the serialized object which describes the change
 * @param {function} fn callback function(data)
 */

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


/**
 * Check the datastore ID and return revision and handle
 * 
 * @param {function} fn callback function(data)
 */

DropboxDatastore.prototype.getDeltas = function(handle_id,rev,fn) {
    console.log('getting deltas');
    var self = this;
    var req = https.request({
        method: 'GET',
        host: 'api.dropbox.com',
        path: '/1/datastores/get_deltas?handle='+handle_id+'&rev='+rev,
        headers: {
            'Authorization': 'Bearer ' + self._token
        }
    },function(res){
        self.callback(res,fn);
    });
    req.end();
};

/**
 * Delete a datastore
 * 
 * @param {string} handle_id the name of the datastore
 * @param {function} fn callback function(data)
 */

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
