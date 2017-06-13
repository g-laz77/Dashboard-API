var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('http://website.informer.com/authbase.net', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  var array = [];
  var $ = cheerio.load(body);
    $('#description').each(function(i, element){
        var k = $(element).text();
        var title = $(element).prev().text();
        title = title.trim();
        console.log(title);
        k = k.trim();
        fs.writeFileSync("gen.txt",k);
        fs.appendFileSync("gen.txt","\n");
        console.log(k);
    });
    $('#alexa_rank').each(function(i, element){
        var k = $(element).children().text();
        k = k.trim();
        fs.appendFileSync("gen.txt","Alexa Rank\n"+k);
        fs.appendFileSync("gen.txt","\n");
        console.log(k);
    });
    $('table.domenGenTable').each(function(i,element){
        var owner = $(element).children().children().eq(2).children().children().text();
        var domain = $(element).children().children().eq(3).children().children().text();
        var registrar = $(element).children().children().eq(4).children().children().text();
        console.log(registrar);
    });
    //console.log(array);
});
