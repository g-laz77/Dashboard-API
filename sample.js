var request = require('request');
var cheerio = require('cheerio');


request('http://www.valbot.com/google.com', function (error, response, body) {
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
        array.push(metadata)
        
    });
    console.log(array);
});
