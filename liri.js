//break each API provider into its own file for readibility and ease of collaboration
var twitterFunctions = require("./twitterfunctions.js");
var spotifyFunctions = require("./spotifyfunctions.js");

var request = require('request');

var liriCommand = process.argv[2];
var liriArgument = process.argv[3];


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
            liriArgument = "The Sign";
        }
        spotifyFunctions.getSong(liriArgument);

        break;

    case "movie-this":
        // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
        if (typeof(liriArgument) === "undefined") {
            liriArgument = "Mr. Nobody";
        }
        omdbFunctions.getMovie(liriArgument);
        
        var result = {};
        url = "http://www.omdbapi.com/?t=" + liriArgument
        request(url, function (error, response, body) {
            if (response && response.statusCode === 200) {
                result = JSON.parse(body);
                console.log(result);
                // This will output the following information to your terminal/bash window:
                console.log("The title of the movie: " + result.Title); // * Title of the movie.
                console.log("Year the movie came out: " + result.Year); // * Year the movie came out.
                console.log("IMDB rating: " + result.imdbRating); // * IMDB Rating of the movie.
                console.log("Country movie produced "  + result.Country); // * Country where the movie was produced.
                console.log("Language of the movie: " + result.Language); // * Language of the movie.
                console.log("Plot of the movie: " + result.Plot); // * Plot of the movie.
                console.log("Actors in the movie: " + result.Actors); // * Actors in the movie.
                
                // Figure out the rotten tomatoes rating
                var rottenTomatoesRating = "Not Available" //just in case we don't find one
                var allRatings = result.Ratings;
                allRatings.forEach(function(element) {
                    if (element.Source === "Rotten Tomatoes") {
                        rottenTomatoesRating = element.Value
                    }
                }, this);
                console.log("Rotten tomatoes rating: " + rottenTomatoesRating);
            }
            else {
                console.log('error:', error); // Print the error if one occurred
            }
            
        });
        
        
        
        
        
        
        
        
        
        break;

    case "do-what-it-says":
        console.log("do-what-it-says");
        // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
        // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
        // Feel free to change the text in that document to test out the feature for other commands.
        break;

    default:
        console.log("Say what?");
}