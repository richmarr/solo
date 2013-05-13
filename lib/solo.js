
var http = require("http"),
    fs = require("fs");

exports.run = function( file, argv ){
    
    // Allow file param to be optionally controlled by command line or option properties
    if ( typeof file !== "string" && !argv ){
        argv = file;
        file = argv._[0] || argv.file
    }
    
    var port = argv.port || 8321;
    
    http.createServer(function( req, res ){
        res.writeHead(200, {'Content-Type':"text/html"});
        fs.createReadStream(argv._[0], {encoding:'utf8'})
            .pipe(res);
    }).listen(port);
    
    console.log("Server running on "+port);
}

