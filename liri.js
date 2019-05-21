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
        doInfo (input);
        break;

        default: console.log("Error. Please try again!")
    }
}

function concertInfo (input){
    var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    console.log(input);

    request (queryUrl, function(error,response, body){


        if (!error && response.statusCode === 200){
            var concertInfo = JSON.parse(body);
            var concertDate = concertInfo[0].datetime;
            var momentDate = moment().format("L");

            for (i = 0; i < concertInfo.length; i++){

            console.log("Venue Name: " + concertInfo[0].venue.name + "Location: " + concertInfo[0].venue.city + concertInfo.venue.country + "Date: " + momentDate);
            }

        }

    })
        
}

function songInfo (input){

    if (input === undefined){
        input === "The Sign";
    }

    spotify.search({type: "track", query: input}, function (err, data){
        if (err){
            return console.log("Error. Please try again!" + err);
        }
        else {
            for (i = 0; i < songInfo; i++){

                var songInfo = data.tracks.items[i];
                console.log("Artist: " + songInfo.artsit[0].name + "Song Name: " + songInfo.name + "Album Name: " + songInfo.album.name + "Song Link: " + songInfo.preview_url)
            }
        }
    })
}

function movieInfo(input){
    if (input === undefined){
        input === "Mr. Nobody"
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);

    request (queryUrl, function (error, response, body){

        if (!error && response.statusCode === 200){

            var movieInfo = JSON.parse(body);

            for (i = 0; i < movieInfo.length; i++){
                console.log("Title: " + movieInfo.title + "Year: " + movieInfo.released + "Rating: " + movieInfo.imdbrating + "Rotten Tomatos: " + movieInfo.ratings[1].value + "Country: " + movieInfo.country + "Language: " + movieInfo.language + "Plot: " + movieInfo.plot + "Actors: " + movieInfo.actors);
            }
        }
    })
}


    

