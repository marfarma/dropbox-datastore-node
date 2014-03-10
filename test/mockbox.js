/* 
var dropbox = nock('https://api.dropbox.com:443')
  .get('/1/account/info')
  .reply(200, "{\"referral_link\": \"https://db.tt/ZdLikieQ\", \"display_name\": \"Pauli Price\", \"uid\": 117285512, \"country\": \"US\", \"quota_info\": {\"datastores\": 0, \"shared\": 0, \"quota\": 4697620480, \"normal\": 4524426356}, \"email\": \"pauli.price@gmail.com\"}", { server: 'nginx',
  date: 'Mon, 10 Mar 2014 19:41:22 GMT',
  'content-type': 'text/javascript',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  'set-cookie': [ 'gvc=MTEyNjQ4NzQxMzg1OTc2NjY0MTUyNDcwMTQzMDEzMTg1NDgyNjY0; expires=Sat, 09 Mar 2019 19:41:22 GMT; Path=/; httponly' ],
  'x-server-response-time': '53',
  'x-dropbox-request-id': 'de74c158faa57be8a5bf6120df5e6fb2',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'x-dropbox-http-protocol': 'None',
  'x-frame-options': 'SAMEORIGIN',
  'x-requestid': 'e68d453be5a611418f995e99e70b436f' })
  .get('/1/datastores/list_datastores')
  .reply(200, "{\"datastores\": [{\"handle\": \"7aBT3zWmj2n76ZV9WuMYEnehuxYq1I\", \"rev\": 0, \"dsid\": \"default\"}], \"token\": \"d4e5540804b5f30c77da63479a16c9d5f409ee08672b18ce6dfc3e154ed08c07\"}", { server: 'nginx',
  date: 'Mon, 10 Mar 2014 19:41:23 GMT',
  'content-type': 'text/javascript',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  'set-cookie': [ 'gvc=MzE2ODQ4MDc5NzM5OTI0NTUyMzI2MzEyODYzNzI2MTYyNTkwNzA1; expires=Sat, 09 Mar 2019 19:41:23 GMT; Path=/; httponly' ],
  'x-server-response-time': '26',
  'x-dropbox-request-id': '1985d3a7fd3c6d999fca4bf61a51198f',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'x-dropbox-http-protocol': 'None',
  'x-frame-options': 'SAMEORIGIN',
  'x-requestid': '80277710772036ede57a171c3fac40e8' })
  .post('/1/datastores/get_or_create_datastore', "dsid=test")
  .reply(200, "{\"handle\": \"0c6TlXfGtSaagNn7cTFQvQ78PLAYPV\", \"rev\": 0, \"created\": true}", { server: 'nginx',
  date: 'Mon, 10 Mar 2014 19:41:23 GMT',
  'content-type': 'text/javascript',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  'set-cookie': [ 'gvc=MzI3ODU2NzQyNzQ2ODc0MTcwMjI5NzA2MDEyNjIxMjgyNTc0MTAx; expires=Sat, 09 Mar 2019 19:41:23 GMT; Path=/; httponly' ],
  'x-server-response-time': '50',
  'x-dropbox-request-id': '2b73f467a8e85ccb7a36f56c955066d5',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'x-dropbox-http-protocol': 'None',
  'x-frame-options': 'SAMEORIGIN',
  'x-requestid': 'cf47cff2460f75d2afb46c6a6c6bee77' })
  .get('/1/datastores/get_datastore?dsid=test')
  .reply(200, "{\"handle\": \"0c6TlXfGtSaagNn7cTFQvQ78PLAYPV\", \"rev\": 0}", { server: 'nginx',
  date: 'Mon, 10 Mar 2014 19:41:24 GMT',
  'content-type': 'text/javascript',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  'set-cookie': [ 'gvc=OTE4OTc1MjQ3NDMxMjQ3NTA3NTI5NDc5MzM1MzQ0ODU4ODgzNzk%3D; expires=Sat, 09 Mar 2019 19:41:24 GMT; Path=/; httponly' ],
  'x-server-response-time': '26',
  'x-dropbox-request-id': 'b2bbd0507c3a2d8140d899d3ef097d06',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'x-dropbox-http-protocol': 'None',
  'x-frame-options': 'SAMEORIGIN',
  'x-requestid': 'e72652543eac0d764f5986ae28d5b42b' })
  
  
  .post('/1/datastores/get_snapshot', "handle=0c6TlXfGtSaagNn7cTFQvQ78PLAYPV")
  .reply(200, "{\"rows\": [], \"rev\": 0}", { server: 'nginx',
  date: 'Mon, 10 Mar 2014 19:41:24 GMT',
  'content-type': 'text/javascript',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  'set-cookie': [ 'gvc=MTI1ODU1MTI2NTIxMjMwNTc3MTEwNjkyNDIxMzYxOTYwMjc0ODMz; expires=Sat, 09 Mar 2019 19:41:24 GMT; Path=/; httponly' ],
  'x-server-response-time': '42',
  'x-dropbox-request-id': '95d5b80b0529e5129e21d973c68f65b5',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'x-dropbox-http-protocol': 'None',
  'x-frame-options': 'SAMEORIGIN',
  'x-requestid': 'a14dea3213071a87009ab3b403fcaa43' })
  .post('/1/datastores/put_delta', "handle=0c6TlXfGtSaagNn7cTFQvQ78PLAYPV&rev=0&changes=%5B%5B%22I%22%2C%20%22tasks%22%2C%20%22myrecord1%22%2C%20%7B%22taskname%22%3A%20%22do%20laundry%22%2C%20%22completed%22%3A%20false%7D%5D%2C%5B%22I%22%2C%20%22tasks%22%2C%20%22myrecord2%22%2C%20%7B%22taskname%22%3A%20%22pay%20mortgage%22%2C%20%22completed%22%3A%20false%7D%5D%2C%5B%22I%22%2C%20%22tasks%22%2C%20%22myrecord3%22%2C%20%7B%22taskname%22%3A%20%22buy%20milk%22%2C%20%22completed%22%3A%20false%7D%5D%2C%5B%22I%22%2C%20%22tasks%22%2C%20%22myrecord4%22%2C%20%7B%22taskname%22%3A%20%22annual%20check-up%22%2C%20%22completed%22%3A%20false%7D%5D%2C%5B%22I%22%2C%20%22tasks%22%2C%20%22myrecord5%22%2C%20%7B%22taskname%22%3A%20%22file%20taxes%22%2C%20%22completed%22%3A%20false%7D%5D%5D")
  .reply(200, "{\"rev\": 1}", { server: 'nginx',
  date: 'Mon, 10 Mar 2014 19:41:25 GMT',
  'content-type': 'text/javascript',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  'set-cookie': [ 'gvc=NzA4MDk5Mjc0NTYzMTQ4NzIzMjEwMjc5MzkwNjIxMTQ5MTYwOTc%3D; expires=Sat, 09 Mar 2019 19:41:25 GMT; Path=/; httponly' ],
  'x-server-response-time': '391',
  'x-dropbox-request-id': '548b0756aa1547ab9013c4f7e0d1e158',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'x-dropbox-http-protocol': 'None',
  'x-frame-options': 'SAMEORIGIN',
  'x-requestid': 'a16f09ad53bd42ac668976e0942a746d' })
  .post('/1/datastores/put_delta', "handle=0c6TlXfGtSaagNn7cTFQvQ78PLAYPV&rev=1&changes=%5B%5B%22U%22%2C%20%22tasks%22%2C%20%22myrecord1%22%2C%20%7B%22completed%22%3A%20%5B%22P%22%2C%20true%5D%7D%5D%5D")
  .reply(200, "{\"rev\": 2}", { server: 'nginx',
  date: 'Mon, 10 Mar 2014 19:41:26 GMT',
  'content-type': 'text/javascript',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  'set-cookie': [ 'gvc=MTU2MDMxNTkxOTU5NjQ1NTk5NDEzNTAwMjEwMDIwOTg4NTMwNDI2; expires=Sat, 09 Mar 2019 19:41:26 GMT; Path=/; httponly' ],
  'x-server-response-time': '93',
  'x-dropbox-request-id': '1708788be6bed0b8e8a474919db55781',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'x-dropbox-http-protocol': 'None',
  'x-frame-options': 'SAMEORIGIN',
  'x-requestid': 'b33f7eb8ab311b0507be2c766cb1e501' })
  .post('/1/datastores/put_delta', "handle=0c6TlXfGtSaagNn7cTFQvQ78PLAYPV&rev=2&changes=%5B%5B%22U%22%2C%20%22tasks%22%2C%20%22myrecord1%22%2C%20%7B%22completed%22%3A%20%5B%22P%22%2C%20true%5D%2C%22completion%22%3A%20%5B%22P%22%2C%2220130310%22%5D%7D%5D%5D")
  .reply(200, "{\"rev\": 3}", { server: 'nginx',
  date: 'Mon, 10 Mar 2014 19:41:26 GMT',
  'content-type': 'text/javascript',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  'set-cookie': [ 'gvc=MjIxNzY5NzEzNzkwMzY1MDg5NTk4NTMyMjM3NzEyMTQ1NDc3NzUy; expires=Sat, 09 Mar 2019 19:41:26 GMT; Path=/; httponly' ],
  'x-server-response-time': '62',
  'x-dropbox-request-id': '11c0cf91f9cdb3b7cdd8060e5c20b1e0',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'x-dropbox-http-protocol': 'None',
  'x-frame-options': 'SAMEORIGIN',
  'x-requestid': '814a5817a62ec3a23a740b7cf8b1291c' })
  .post('/1/datastores/put_delta', "handle=0c6TlXfGtSaagNn7cTFQvQ78PLAYPV&rev=3&changes=%5B%5B%22U%22%2C%20%22tasks%22%2C%20%22myrecord1%22%2C%20%7B%22completed%22%3A%20%5B%22P%22%2C%20false%5D%2C%22completion%22%3A%20%5B%22D%22%5D%7D%5D%5D")
  .reply(200, "{\"rev\": 4}", { server: 'nginx',
  date: 'Mon, 10 Mar 2014 19:41:27 GMT',
  'content-type': 'text/javascript',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  'set-cookie': [ 'gvc=MjIzNDY0NzAxMTE3Nzc0OTUxMjc0MTg0MzAyMTk3MDgyMzkwNTgw; expires=Sat, 09 Mar 2019 19:41:27 GMT; Path=/; httponly' ],
  'x-server-response-time': '61',
  'x-dropbox-request-id': '49daa0f43e84543acecd68326b978ebe',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'x-dropbox-http-protocol': 'None',
  'x-frame-options': 'SAMEORIGIN',
  'x-requestid': 'be67e7af53787cebf02855e24d477c14' })
  .post('/1/datastores/put_delta', "handle=0c6TlXfGtSaagNn7cTFQvQ78PLAYPV&rev=4&changes=%5B%5B%22D%22%2C%20%22tasks%22%2C%20%22myrecord2%22%5D%2C%5B%22D%22%2C%20%22tasks%22%2C%20%22myrecord3%22%5D%2C%5B%22D%22%2C%20%22tasks%22%2C%20%22myrecord4%22%5D%20%5D")
  .reply(200, "{\"rev\": 5}", { server: 'nginx',
  date: 'Mon, 10 Mar 2014 19:41:28 GMT',
  'content-type': 'text/javascript',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  'set-cookie': [ 'gvc=MTMyNjc4MTc3NjQwMTQxNTc3MDg2NDYwNTk3NDU3MzY4ODY0MzEz; expires=Sat, 09 Mar 2019 19:41:28 GMT; Path=/; httponly' ],
  'x-server-response-time': '93',
  'x-dropbox-request-id': 'f2775bda80ae76a0bd885d7069098e06',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'x-dropbox-http-protocol': 'None',
  'x-frame-options': 'SAMEORIGIN',
  'x-requestid': 'f9df81d723406603307b24301858070a' })
  
  
  .get('/1/datastores/get_deltas?handle=0c6TlXfGtSaagNn7cTFQvQ78PLAYPV&rev=0')
  .reply(200, "{\"deltas\": [{\"nonce\": \"\", \"changes\": [[\"I\", \"tasks\", \"myrecord1\", {\"taskname\": \"do laundry\", \"completed\": false}], [\"I\", \"tasks\", \"myrecord2\", {\"taskname\": \"pay mortgage\", \"completed\": false}], [\"I\", \"tasks\", \"myrecord3\", {\"taskname\": \"buy milk\", \"completed\": false}], [\"I\", \"tasks\", \"myrecord4\", {\"taskname\": \"annual check-up\", \"completed\": false}], [\"I\", \"tasks\", \"myrecord5\", {\"taskname\": \"file taxes\", \"completed\": false}]], \"rev\": 0}, {\"nonce\": \"\", \"changes\": [[\"U\", \"tasks\", \"myrecord1\", {\"completed\": [\"P\", true]}]], \"rev\": 1}, {\"nonce\": \"\", \"changes\": [[\"U\", \"tasks\", \"myrecord1\", {\"completion\": [\"P\", \"20130310\"], \"completed\": [\"P\", true]}]], \"rev\": 2}, {\"nonce\": \"\", \"changes\": [[\"U\", \"tasks\", \"myrecord1\", {\"completion\": [\"D\"], \"completed\": [\"P\", false]}]], \"rev\": 3}, {\"nonce\": \"\", \"changes\": [[\"D\", \"tasks\", \"myrecord2\"], [\"D\", \"tasks\", \"myrecord3\"], [\"D\", \"tasks\", \"myrecord4\"]], \"rev\": 4}]}", { server: 'nginx',
  date: 'Mon, 10 Mar 2014 19:41:28 GMT',
  'content-type': 'text/javascript',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  'set-cookie': [ 'gvc=MjQ1OTA2MzQwMDkwOTA3MDk3NTI1OTI1Nzc0NTI5NDgzODI0NTA2; expires=Sat, 09 Mar 2019 19:41:28 GMT; Path=/; httponly' ],
  'x-server-response-time': '40',
  'x-dropbox-request-id': '95981c62b097193826deba4dccfe4c9c',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'x-dropbox-http-protocol': 'None',
  'x-frame-options': 'SAMEORIGIN',
  'x-requestid': '78d40b3bce8460f99549a07baae4cc28' })

  
  .post('/1/datastores/get_snapshot', "handle=G5ykWBOnTNzF9iTiSWjxBi7DQY9Q0v")
  .reply(200, "{\"rows\": [{\"tid\": \"tasks\", \"data\": {\"taskname\": \"annual check-up\", \"completed\": false}, \"rowid\": \"myrecord4\"}, {\"tid\": \"tasks\", \"data\": {\"taskname\": \"pay mortgage\", \"completed\": false}, \"rowid\": \"myrecord2\"}, {\"tid\": \"tasks\", \"data\": {\"taskname\": \"file taxes\", \"completed\": false}, \"rowid\": \"myrecord5\"}, {\"tid\": \"tasks\", \"data\": {\"taskname\": \"buy milk\", \"completed\": false}, \"rowid\": \"myrecord3\"}, {\"tid\": \"tasks\", \"data\": {\"taskname\": \"do laundry\", \"completed\": false}, \"rowid\": \"myrecord1\"}], \"rev\": 4}", { server: 'nginx',
  date: 'Mon, 10 Mar 2014 19:59:46 GMT',
  'content-type': 'text/javascript',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  'set-cookie': [ 'gvc=MjQ4ODE1NTM3MDgwOTUxMDAxMDU4MTQ2MTcxODEzNTEzMTE0NDgx; expires=Sat, 09 Mar 2019 19:59:46 GMT; Path=/; httponly' ],
  'x-server-response-time': '45',
  'x-dropbox-request-id': '9dc650d31a85107a762da32ac4e3cfaa',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'x-dropbox-http-protocol': 'None',
  'x-frame-options': 'SAMEORIGIN',
  'x-requestid': 'd0f0bbab994bc96137800bb7c39204c3' });

  
  

  .post('/1/datastores/delete_datastore', "handle=0c6TlXfGtSaagNn7cTFQvQ78PLAYPV")
  .reply(200, "{\"ok\": \"Deleted datastore with handle: u'0c6TlXfGtSaagNn7cTFQvQ78PLAYPV'\"}", { server: 'nginx',
  date: 'Mon, 10 Mar 2014 19:41:29 GMT',
  'content-type': 'text/javascript',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  'set-cookie': [ 'gvc=Mjk3MzQ1MDE2MjcyODYxNzY3MDc2MDA0MjQ0MjMxNzg1NjM0MDQ3; expires=Sat, 09 Mar 2019 19:41:29 GMT; Path=/; httponly' ],
  'x-server-response-time': '54',
  'x-dropbox-request-id': '289ba3e2ffffdea6cf1e7290911ee21b',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'x-dropbox-http-protocol': 'None',
  'x-frame-options': 'SAMEORIGIN',
  'x-requestid': 'b6154037fcd14d908985bd0166b9c930' });

 */