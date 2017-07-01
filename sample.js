var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('http://socialrankz.com/facebook.com', function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred 
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  var $ = cheerio.load(body);
  var i =0;
    $('.icon').each(function(i, element){
            temp = ($(element).attr('src'));
            if(temp == 'http://socialrankz.com/history.png')
            {
                trow = $(element).parent().parent().parent().next().children().eq(1).html();
                console.log(trow);
                fs.writeFileSync("gen.html",trow);

            }
    });
});
