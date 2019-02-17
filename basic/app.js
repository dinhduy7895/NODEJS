var http = require('http');
var dt = require('./export');
var file = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname;
    file.readFile(filename, (err,data)=>{
        if (err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 not found');
        }
        else{
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
            res.end();
    }})

}).listen(8080);