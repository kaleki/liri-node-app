require("dotenv").config();
// varibles
var keys = require("./keys.js");
var request = require("request");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv[3];


