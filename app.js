const http = require("http");
var dbmodule = require("./DBmodule.js");

var server = http.createServer((req, res) =>{
    result = dbmodule.authenticaterUser("admin, admin");
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end("<html><body><h1>" + result + "</h1></body></html>");
    console.log("Req received");
});

server.listen(3003);
console.log("run 3003")
