var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var formidable = require("formidable");
var util = require('util');
const spawn = require('child_process').spawn;
// Create a server
http.createServer( function (request, response) {  
    if (request.method.toLowerCase() == 'get') {
        display(request,response);
    } else if (request.method.toLowerCase() == 'post') {
        processAllFieldsOfTheForm(request, response);
    }
}).listen(1339);

function display(req,res) {
    if(req.url.indexOf('.txt') != -1){ //req.url has the pathname, check if it conatins '.html'
      if(req.url.indexOf('url.txt') != -1){
          fs.readFile(__dirname + '/url.txt', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/txt'});
            res.write(data);
            res.end();
          });
      }
    }
    if(req.url.indexOf('.html') != -1){ //req.url has the pathname, check if it conatins '.html'
      if(req.url.indexOf('/examples/dashboard.html') != -1){
        fs.readFile(__dirname + '/examples/dashboard.html', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      }
      if(req.url.indexOf('/examples/sample.html') != -1){
        fs.readFile(__dirname + '/examples/sample.html', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      }
      if(req.url.indexOf('/examples/index.html') != -1){
        fs.readFile(__dirname + '/examples/index.html', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      }
    }

    if(req.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'

      if(req.url.indexOf('/assets/js/material-dashboard.js') != -1){
        fs.readFile(__dirname + '/assets/js/material-dashboard.js', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
      if(req.url.indexOf('/assets/js/jquery-3.1.0.min.js') != -1){
        fs.readFile(__dirname + '/assets/js/jquery-3.1.0.min.js', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
      if(req.url.indexOf('/assets/js/bootstrap.min.js') != -1){
        fs.readFile(__dirname + '/assets/js/bootstrap.min.js', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
      if(req.url.indexOf('/assets/js/material.min.js') != -1){
        fs.readFile(__dirname + '/assets/js/material.min.js', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
      if(req.url.indexOf('/assets/js/chartist.min.js') != -1){
        fs.readFile(__dirname + '/assets/js/chartist.min.js', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
      if(req.url.indexOf('/assets/js/bootstrap-notify.js') != -1){
        fs.readFile(__dirname + '/assets/js/bootstrap-notify.js', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
      if(req.url.indexOf('/server.js') != -1){
        fs.readFile(__dirname + '/server.js', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
      if(req.url.indexOf('/assets/js/demo.js') != -1){
        fs.readFile(__dirname + '/assets/js/demo.js', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }

    }

    if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'
      if(req.url.indexOf('/assets/css/material-dashboard.css') != -1){
        fs.readFile(__dirname + '/assets/css/material-dashboard.css', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          res.end();
        });
      }
      if(req.url.indexOf('/assets/css/bootstrap.min.css') != -1){
        fs.readFile(__dirname + '/assets/css/bootstrap.min.css', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          res.end();
        });
      }
      if(req.url.indexOf('/assets/css/demo.css') != -1){
        fs.readFile(__dirname + '/assets/css/demo.css', function (err, data) {
          if (err) console.log(err);
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          res.end();
        });
      }
    }
}

function processAllFieldsOfTheForm(req, res) {
    var form = new formidable.IncomingForm();
    // #console.log("kk");  
    form.parse(req, function (err, fields, files) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        // res.writeHead(200, {
        //     'content-type': 'text/plain'
        // });
        // res.write('\n\n');
        fs.writeFileSync("url.txt",fields.ss);
        console.log("Form input submitted");
        //res.end()
        //res.send({redirectUrl: "/examples/dashboard.html"});
        res.writeHead(200, {
        'Location': 'examples/dashboard.html'
  //add other headers here...
        });
        res.end();

    });
}