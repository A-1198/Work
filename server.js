//jshint esversion:6

const express = require("express");
const app = express();
app.get("/",function(req, res)
{
    res.send("<h1>Hello world</h1>");
}
);

app.get("/contact",function(req,res)
{
 res.send("ayushrajpandey1198@gmail.com")
});

app.get("/about",function(req,res)
{
    res.send("Author : Ayush Raj");
});

app.listen(3000,function()
{
console.log("Shourya is my best friend");
});
