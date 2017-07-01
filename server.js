var {app} = require('electron');
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

function handleRequest(req, res) {
    var file = path.join(app.getAppPath() + '/src', req.url);

    if(req.url === '/') {
        file += 'index.html';
    }
    console.log(file, req.url);
    
    fs.exists(file, function(exists) {
        if (exists && fs.lstatSync(file).isFile()) {
            res.setHeader("Content-Type", mime.lookup(file));
            res.writeHead(200, {
                'Access-Control-Allow-Origin': '*'
            });
            fs.createReadStream(file).pipe(res);

            return;
        }

        res.writeHead(404);
        res.write('404 Not Found');
        res.end();
    });
}

var server = http.createServer(handleRequest);

server.listen(8888, function() {
    console.log('server started at http://localhost:8888');
});