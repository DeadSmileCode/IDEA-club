// git commit -am "" && git push heroku master

const express = require("express");
const fs = require("fs");

const site = express();
const file_games = './html/games_statistic.json';

//site.set("view engine", "hbs");

site.use(express.static(__dirname + "/html"));

site.get("/", function(request, response){
    response.sendFile("./html/main_p.html" , { root: '.' });
});
site.use("/index", function (request, response) {
  	response.redirect("/");
});
site.use("/home", function (request, response) {
  	response.redirect("/");
});
site.use("/main", function (request, response) {
  	response.redirect("/");
});

site.use("/statistic" , function (request, response){
	response.sendFile("./html/result_page.html" , { root: '.' });
});
site.use("/result", function (request, response) {
  	response.redirect("/statistic");
});

site.get("/IT" , function (request, response){
	response.sendFile("./html/it_page.html" , { root: '.' });
});

site.post("/table/add_statistic" , function (request, response) {
    if(!request.body) return response.sendStatus(400);

    const games_json = require(file_games);
	games_json.all_games++;
	games_json.games_data.push(JSON.parse(request.body));

    fs.writeFile(file_games, JSON.stringify(games_json), function (err) {
	  	if (err) return console.log(err);
	  	response.json({public:true});
	});
});

site.post("/table/remove_statistic" , function (request, response) {
	const games_json = require(file_games);
    if(!request.body) return response.sendStatus(400);

    if(JSON.parse(request.body).type === "id"){
		games_json.games_data.splice(JSON.parse(request.body).data);
		fs.writeFile(file_games, JSON.stringify(games_json), function (err) {
		  	if (err) return console.log(err);
		  	response.json({public:true});
		});
	}
	else if(JSON.parse(request.body).type === "title"){
		for(let i = 0 ; i < games_json.all_games; i++){
			if(JSON.parse(request.body).data === games_json.games_data[i].title){
				games_json.games_data.splice(i);
				fs.writeFile(file_games, JSON.stringify(games_json), function (err) {
				  	if (err) return console.log(err);
				  	response.json({public:true});
				});
			}
		}
	}
});

site.listen(process.env.PORT);

