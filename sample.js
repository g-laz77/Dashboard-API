var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('http://www.valbot.com/google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  var array = [];
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
                    fs.appendFileSync('seo.txt', gip);
                    fs.appendFileSync('seo.txt', "\n");
                    fs.appendFileSync('seo.txt', yip);
                    fs.appendFileSync('seo.txt', "\n");
                    fs.appendFileSync('seo.txt', bip);                                
                }
            });
        }
    });
    console.log(array);
});
