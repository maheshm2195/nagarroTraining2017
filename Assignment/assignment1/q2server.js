var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var morgan =require("morgan");
var app = express();

// PUG used for templates
app.set("view engine","pug");
app.set("views","./public");

app.listen(3000);

//MORGAN used to log all requests
app.use(morgan('combined'))

//Redirect request
app.get("/form",function (req,res) {
    res.redirect("/assets/form.html");
});

// Reading static resource of form from "public" directory
app.use("/assets",express.static(__dirname+"/public/"));


//Body parser used
app.use("/",bodyParser.urlencoded({encoded:false}));

// Final submit page. Day processing and use of template done here
app.post("/submit",function (req,res) {
    var dob = parseDate(req.body.dob);
    var days = ( (new Date()).getTime() - dob.getTime() ) / (24 * 60 * 60 * 1000);
    var finalS = "Hey " + req.body.name + ", you have lived on this planet for " + Math.round(days * 100) / 100 + " days.";
    res.render("reply",{message:finalS});
});

//Just a function to parse String returned from Date picker in a Data object
function parseDate(str) {
    var mdy = str.split('-');
    return new Date(mdy[0], mdy[1]-1, mdy[2]);
}