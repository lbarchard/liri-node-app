//break each API provider into its own file for readibility and ease of collaboration
var twitterFunctions = require("./twitterfunctions.js");
var spotifyFunctions = require("./spotifyfunctions.js");
var omdbFunctions = require("./omdbfunctions.js");
var inquirer = require("inquirer");


var fs = require("fs");

var liriCommand = process.argv[2];
var liriArgument = process.argv[3];

if (typeof(liriArgument) === "undefined") {
    inquirer.prompt([
        {
            type: "list",
            message: "Which command to execute?",
            choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
            name: "command"
        },
        {
            type: "input",
            message: "What are you searching for?",
            name: "argument"
        }
    ]).then(function(liriChoices) {
        liriCommand = liriChoices.command;
        liriArgument = liriChoices.argument;
        liri(liriCommand, liriArgument)
    })
}



function liri(liriCommand, liriArgument) {
    switch (liriCommand) {
        case "my-tweets":
            if (typeof(liriArgument) === "undefined") {
                liriArgument = "les_barchard";
            }
            // This will show your last 20 tweets and when they were created at in your terminal/bash window.
            twitterFunctions.getTweets(liriArgument);        
            
            break;

        case "spotify-this-song":
            // if no song is provided then your program will default to
            // "The Sign" by Ace of Base
            if (typeof(liriArgument) === "undefined") {
                liriArgument = "The Sign Ace of Base";
            }
            spotifyFunctions.getSong(liriArgument);

            break;

        case "movie-this":
            // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
            if (typeof(liriArgument) === "undefined") {
                liriArgument = "Mr. Nobody";
            }

            omdbFunctions.getMovie(liriArgument);
            
            break;

        case "do-what-it-says":
            // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
            // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
            fs.readFile('./random.txt', (err, data) => {
                if (err) throw err;
                liriCommand = (data.toString().split(",")[0]);
                liriArgument = (data.toString().split(",")[1]);
                liri(liriCommand, liriArgument);
            });

            break;

        default:
            console.log("Say what?");
    }
}