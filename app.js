var express = require("express");
var fetch = require("node-fetch");
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var title = "";
var date = "";
var explanation = "";
var url = "";

app.get('/', function(req, res){
    getData(true);
    res.render("index",{title:title, date:date, explanation:explanation, url:url});
});

function getData(){
    //var info = "https://csuserversidewebdevfinal.herokuapp.com/";
    fetch("https://csuserversidewebdevfinal.herokuapp.com/")
        .then(res => res.json())
        .then(json =>{
            title = json.title;
            url = json.url;
            explanation = json.explanation;
            date = json.date;
        })
    };

app.listen(port, function(){

});