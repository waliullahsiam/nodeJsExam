let http = require("http");
let fs = require("fs");

http.createServer(function (req, res) {


    if (req.url === "/") {
        fs.readFile("home.html", "utf8", function (err, data) {

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);

        });
    } 
    
    
    
    else if (req.url === "/contact") {
        
        fs.readFile("contact.html", "utf8", function (err, data) {

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);

        });
    } 
    
    
    
    
    else if (req.url === "/about") {
        fs.readFile("about.html", "utf8", function (err, data) {

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);

        });
    } 
    
    
    
    
    else if (req.url === "/file-write") {


        fs.writeFile("demo.txt", "Hello world",function(err,data){

            fs.readFile("file.html","utf8",function(err,data){


                res.writeHead(200,{"content-Type":"text/html"})

                res.end(data);
            })



        })
        
              
            

    }



}).listen(5500, function () {
    console.log("Server run successful");
});