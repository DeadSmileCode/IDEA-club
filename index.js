// git commit -am "" && git push heroku master

const express = require("express");
const fs = require("fs");

const site = express();
const file_games = './html/games_statistic.json';

//site.set("view engine", "hbs");

site.use(express.static(__dirname + "/www"));

site.use(function(req , res , next) {
	var date = new Date();
	var data = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${req.method} ${req.url} ${req.get("user-agent")}`;
	fs.writeFile("hello.txt", "Hello мир!", function(error){
	    if(error){
	    	console.log("ERROR!");
	    	let data = fs.readFileSync("hello.txt", "utf8");
	    } else {
	    	console.log("Add log!");
	    }
	});
});

site.get("/" , function(req ,res) {
	res.sendFile("./www/index.html" , { root: '.' });
});
site.get("/about" , function(req ,res) {
	res.sendFile("./www/about.html" , { root: '.' });
});
site.get("/progress" , function(req ,res) {
	res.sendFile("./www/index.html" , { root: '.' });
});
site.get("/about/system" , function(req ,res) {
	res.sendFile("./www/about-system.html" , { root: '.' });
});
site.get("/about/deportaments" , function(req ,res) {
	res.sendFile("./www/deportaments.html" , { root: '.' });
});
site.get("/how-link" , function(req ,res) {
	res.sendFile("./www/how-link.html" , { root: '.' });
});

site.listen(process.env.PORT);

