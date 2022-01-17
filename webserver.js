var http =require('http');
var webServer = http.createServer(function(rq,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html>This is fullstack class</html>');
    res.end();
});
webServer.listen(2500);


// MySQL to Node.js connectivity


