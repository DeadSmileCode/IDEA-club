// git commit -am "" && git push heroku master

const express = require("express");
const fs = require("fs");
const update_time = true;

const site = express();
const file_games = './html/games_statistic.json';

//site.set("view engine", "hbs");

site.use(express.static(__dirname + "/www"));

if (update_time) {
	site.get(/.+/ , function(req ,res) {
		res.sendFile("./www/update-time.html" , { root: '.' });
	});
} else {
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
}
site.listen(process.env.PORT);

