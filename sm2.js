var cheerio = require('cheerio');
$ = cheerio.load('<div class="panel"><div class="panel-heading bg-facebook text-center"><a><i class="fa fa-facebook fa-3x"></i></a></div><div class="padder-v text-center clearfix"><div class="h3 font-bold">8</div><small class="text-muted">Facebook likes</small></div></div>');
$('.panel').each(function(i, element){
        var panel = $(element).children().first().next().children().eq(0).text();
        console.log(panel);
});