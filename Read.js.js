const http = require("http");
var filess = require('fs')

filess.readFile('./test.txt', function (err, data){
  if(err){
    return console.log(err);   
}
console.log("readdd", data.to.String());
});