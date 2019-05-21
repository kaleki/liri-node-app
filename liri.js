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
