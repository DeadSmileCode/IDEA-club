// git commit -am "" && git push heroku master

const express = require("express");
const fs = require("fs");

const site = express();
const file_games = './html/games_statistic.json';

//site.set("view engine", "hbs");

site.use(express.static(__dirname + "/www"));

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
	res.sendFile("./www/about_system.html" , { root: '.' });
});
site.get("/about/departments" , function(req ,res) {
	res.sendFile("./www/deportaments.html" , { root: '.' });
});
site.get("/how-link" , function(req ,res) {
	res.sendFile("./www/how-link.html" , { root: '.' });
});

site.listen(process.env.PORT);

