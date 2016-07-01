var request = require('request');
var apiUrl = 'https://mxtoolbox.com/api/v1/lookup/';
var apiRoutes = {
  mx:'mx/',
  a:'a/',
  dns:'dns/',
  spf:'spf/',
  txt:'txt/',
  soa:'soa/',
  blacklist:'blacklist/',
  smtp:'smtp/',
  tcp:'tcp/',
  http:'http/',
  https:'https/',
  ping:'ping/',
  trace:'trace/'
};

function mx(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.mx+url,apiKey, function(resp){
      callback(resp);
  });
};

function a(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.a+url,apiKey, function(resp){
      callback(resp);
  });
};

function dns(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.dns+url,apiKey, function(resp){
      callback(resp);
  });
};

function spf(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.spf+url,apiKey, function(resp){
      callback(resp);
  });
};

function txt(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.txt+url,apiKey, function(resp){
      callback(resp);
  });
};

function soa(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.soa+url,apiKey, function(resp){
      callback(resp);
  });
};

function ptr(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.ptr+url,apiKey, function(resp){
      callback(resp);
  });
};
function blacklist(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.blacklist+url,apiKey, function(resp){
      callback(resp);
  });
};
function smtp(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.smtp+url,apiKey, function(resp){
      callback(resp);
  });
};
function tcp(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.tcp+url,apiKey, function(resp){
      callback(resp);
  });
};

function http(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.http+url,apiKey, function(resp){
      callback(resp);
  });
};
function https(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.https+url,apiKey, function(resp){
      callback(resp);
  });
};
function ping(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.ping+url,apiKey, function(resp){
      callback(resp);
  });
};
function trace(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.trace+url,apiKey, function(resp){
      callback(resp);
  });
};
function makeRequest(url,apiKey,callback) {
  console.log(url);
    var options = {
      headers:{
        'Authorization':apiKey,
        'Content-Type':'application/json'
      },
      uri: url,
      method: 'GET',
      json:true
   };
    var res = {};
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        }
        else {
            res.error_code = response.statusCode;
            res.body = body;
        }
        callback(res);
    });
};


module.exports = {
  mx:mx,
  a:a,
  dns:dns,
  spf:spf,
  txt:txt,
  soa:soa,
  blacklist:blacklist,
  smtp:smtp,
  tcp:tcp,
  http:http,
  https:https,
  ping:ping,
  trace:trace,
  ptr:ptr
};
