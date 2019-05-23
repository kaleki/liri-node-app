require("dotenv").config();
// varibles
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment")
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
console.log(keys)
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

        case ("do-what-it-says"):
        doInfo (input);
        break;

        default: console.log("Error. Please try again!")
    }
}

function concertInfo (input){
    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
    .then(function(response){
        for (i = 0; i < response.data.length; i++){
    
            var concertDate = response.data[0].datetime;
            var momentDate = moment().format("L");
            var concertInfo = 
            "Venue Name: " + response.data[i].venue.name + "Location: " + response.data[i].venue.city + "Date: " + momentDate;
            console.log(concertInfo)
        }

    })
    .catch(function(error){
        console.log(error)
    })

}

function songInfo (input){

    if (input === undefined){
        input === "The Sign";
    }
    console.log(input)
    spotify.search({type: "track", query: input},function(err,data){
        console.log(data)
        for (i = 0; i < songInfo; i++){
    
            var songInfo = 
            "Artist: " + response.tracks.items[i].artist[0].name + "Song Name: " + response.tracks.items[i].name + "Album Name: " + response.tracks.items[i].album.name + "Song Link: " + repsonse.tracks.items[i].preview_url;
            console.log(songInfo);
    

        }})       
}

function movieInfo(input){
    if (input === undefined){
        input === "Mr. Nobody"
    }
    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy")
    .then(function(response){
        // console.log(response.data)
        var movieInfo =
        "Title: " + response.data.Title + "Year: " + response.data.Released + "Rating: " + response.data.imdbRating + "Rotten Tomatos: " + response.data.Ratings[1].Value+ "Country: " + response.data.Country + "Language: " + response.data.Language + "Plot: " + response.data.Plot + "Actors: " + response.data.Actors;
        console.log(movieInfo)

    })
    .catch(function(error){
        console.log(error);
    })

}
    


function doInfo(input){
    fs.readFile("random.txt", "utf8", function(err,data){
        if (err){
            return console.log(err);

        }
        console.log(data)
        var dataArr = data.split(",");
        commandInputs(dataArr[0], dataArr[1]);
    })
}

