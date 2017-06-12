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
                if($(elem).text() === "Estimated Data Report"){
                    var pviews = $(elem).parent().next().children().children().children().eq(1).children().eq(1).children().text();
                    var adincome = $(elem).parent().next().children().children().children().eq(1).children().eq(3).children().text();
                    fs.appendFileSync('datareport.txt', pviews);
                    fs.appendFileSync('datareport.txt', "\n");
                    fs.appendFileSync('datareport.txt', adincome);
                                                    
                }
            });
        }
    });
    console.log(array);
});
