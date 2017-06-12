var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
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
      if(req.url.indexOf('flikes.txt') != -1){
          fs.readFile(__dirname + '/flikes.txt', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/txt'});
            res.write(data);
            res.end();
          });
      }
      if(req.url.indexOf('datareport.txt') != -1){
          fs.readFile(__dirname + '/datareport.txt', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/txt'});
            res.write(data);
            res.end();
          });
      }
      if(req.url.indexOf('seo.txt') != -1){
          fs.readFile(__dirname + '/seo.txt', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/txt'});
            res.write(data);
            res.end();
          });
      }
      if(req.url.indexOf('tweets.txt') != -1){
          fs.readFile(__dirname + '/tweets.txt', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/txt'});
            res.write(data);
            res.end();
          });
      }
    }
    if(req.url.indexOf('.html') != -1){ //req.url has the pathname, check if it conatins '.html'
      if(req.url.indexOf('/examples/dashboard.html') != -1){
        var domain = "";
        
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
        fs.writeFileSync("url.txt",fields.ss);
        url = 'http://www.valbot.com/'.concat(fields.ss);
        console.log(url);
        request(url, function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred 
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
          var array = [];
          var $ = cheerio.load(body);
            $('div.panel').each(function(i, element){
                //console.log(this)
                var number = $(element).children().first().next().children().eq(0).text()
                var name = $(element).children().first().next().children().eq(1).text()
                var metadata = {
                    Type: name,
                    Number: number,
                };
                if(name=="Facebook likes"){
                  fs.writeFileSync("flikes.txt",number);
                  console.log(number);
                }
                else if(name=="Tweets")
                  fs.writeFileSync("tweets.txt",number);
                
            });
          var $ = cheerio.load(body);
            $('div.container').each(function(i, element){
                var number = $(element).children().children().eq(0).children().eq(1);
                if(number)
                {
                    $(number).each(function(j,elem){
                        if($(elem).text() === "SEO Stats"){
                            var gip = $(elem).parent().next().children().children().children().children().children().eq(1).children().children().eq(1).text();
                            var yip = $(elem).parent().next().children().children().children().children().children().eq(2).children().children().eq(1).text();
                            var bip = $(elem).parent().next().children().children().children().children().children().eq(3).children().children().eq(1).text();
                            fs.writeFileSync('seo.txt', gip);
                            fs.appendFileSync('seo.txt', "\n");
                            fs.appendFileSync('seo.txt', yip);
                            fs.appendFileSync('seo.txt', "\n");
                            fs.appendFileSync('seo.txt', bip);                                
                        }
                        else if($(elem).text() === "Estimated Data Report"){
                            var pviews = $(elem).parent().next().children().children().children().eq(1).children().eq(1).children().text();
                            var adincome = $(elem).parent().next().children().children().children().eq(1).children().eq(3).children().text();
                            fs.writeFileSync('datareport.txt', pviews);
                            fs.appendFileSync('datareport.txt', "\n");
                            fs.appendFileSync('datareport.txt', adincome);
                        }
                    });
                }
            });
        });
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