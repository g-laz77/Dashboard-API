var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('http://socialrankz.com/google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  var $ = cheerio.load(body);
  var i =0;
    $('#chart_div').each(function(i, element){
        if(i == 0)
        {
            console.log($(element).parent().html());
            fs.writeFileSync("gen.html",$(element).text());
            i = 1;
        }
    });
});
