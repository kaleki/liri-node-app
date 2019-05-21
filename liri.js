require("dotenv").config();
// varibles
var keys = require("./keys.js");
var request = require("request");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv[3];

commandInputs(command,input);

function commandInputs (command, input){
    switch (command){
        case "concert-this":
        concertInfo (input);
        break;
        
        case "spotify-this-song":
        songInfo (input);
        break;

        case "movie-this":
        movieInfo (input);
        break;

        case ("do-what-says"):
        someInfo (input);
        break;

        default: console.log("Error. Please try again!")
    }
}

function concerIt (input){
    var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    console.log(input);

    request (queryUrl, function(error,response, body){


        if (!error && response.statusCode === 200){
            var concertInfo = JSON.parse(body);
            var concertDate = concertInfo[0].datetime;
            var momentDate = moment().format("L");

            console.log("Venue Name: " + concertInfo[0].venue.name + "Location: " + concertInfo[0].venue.city + concertInfo.venue.country + "Date: " + momentDate);
        }

    })
        
}


    

