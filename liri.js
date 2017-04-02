var twitterFunctions = require("./twitterfunctions.js");

var liriCommand = process.argv[2];
var liriArgument = process.argv[3];


switch (liriCommand) {
    case "my-tweets":
        twitterFunctions.getTweets();        

        

        break;
    case "spotify-this-song ":
        console.log("spotify-this-song");
        // if no song is provided then your program will default to
        // "The Sign" by Ace of Base
        if (liriArgument === "") {
            liriArgument = "The Sign";
        }

        // This will show the following information about the song in your terminal/bash window
        // Artist(s)
        // The song's name
        // A preview link of the song from Spotify
        // The album that the song is from

        break;
    case "movie-this":
        console.log("movie-this");
        // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
        if (liriArgument === "") {
            liriArgument = "Mr. Nobody.";
        }
        // This will output the following information to your terminal/bash window:
        // * Title of the movie.
        // * Year the movie came out.
        // * IMDB Rating of the movie.
        // * Country where the movie was produced.
        // * Language of the movie.
        // * Plot of the movie.
        // * Actors in the movie.
        // * Rotten Tomatoes Rating.
        // * Rotten Tomatoes URL.
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