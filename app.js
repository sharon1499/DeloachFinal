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
    getData();
    res.render("index",{title:title, date:date, explanation:explanation, url:url});
});

function getData(){
    fetch("https://csuserversidewebdevfinal.herokuapp.com/")
        .then(res => res.json())
        .then(json => {
            title = json.title;
            url = json.url;
            explanation = json.explanation;
            date = json.date;
        });
    }

app.listen(port, function(){

});

//http.createServer(app).listen(port, function()