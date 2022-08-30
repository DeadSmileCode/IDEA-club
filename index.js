// git commit -am "" && git push heroku master

const express = require("express");
const fs = require("fs");

const site = express();
const file_games = './html/games_statistic.json';

//site.set("view engine", "hbs");

site.use(express.static(__dirname + "/www"));


site.listen(process.env.PORT);

