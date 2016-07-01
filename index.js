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
  makeRequest(apiUrl+apiRoutes.mx+format_url(url),apiKey, function(resp){
      callback(resp);
  });
};

function a(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.a+format_url(url),apiKey, function(resp){
      callback(resp);
  });
};

function dns(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.dns+format_url(url),apiKey, function(resp){
      callback(resp);
  });
};

function spf(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.spf+format_url(url),apiKey, function(resp){
      callback(resp);
  });
};

function txt(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.txt+format_url(url),apiKey, function(resp){
      callback(resp);
  });
};

function soa(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.soa+format_url(url),apiKey, function(resp){
      callback(resp);
  });
};

function ptr(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.ptr+format_url(url),apiKey, function(resp){
      callback(resp);
  });
};
function blacklist(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.blacklist+format_url(url),apiKey, function(resp){
      callback(resp);
  });
};
function smtp(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.smtp+format_url(url),apiKey, function(resp){
      callback(resp);
  });
};
function tcp(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.tcp+format_url(url),apiKey, function(resp){
      callback(resp);
  });
};

function http(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.http+format_url(url),apiKey, function(resp){
      callback(resp);
  });
};
function https(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.https+format_url(url),apiKey, function(resp){
      callback(resp);
  });
};
function ping(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.ping+format_url(url),apiKey, function(resp){
      callback(resp);
  });
};
function trace(url,apiKey,callback){
  makeRequest(apiUrl+apiRoutes.trace+format_url(url),apiKey, function(resp){
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

            console.log(res.error_code);
        }
        callback(res);
    });
};

function format_url(url) {
  return url.replace(/^(http|https):\/\//g, '');
}


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
