
var http = require("http"),
    defaultPort = 8321,
    fs = require("fs"),
    argv = require('optimist')
        .usage('Usage: solo [file]')
        .demand(1)
        .describe("p","The port number to run the server on (default "+defaultPort+")")
        .alias("p","port")
        .argv,
    port = argv.port || defaultPort;

http.createServer(function( req, res ){
    res.writeHead(200, {'Content-Type':"text/html"});
    fs.createReadStream(argv._[0], {encoding:'utf8'})
        .pipe(res);
}).listen(port)

console.log("Server running on "+port);