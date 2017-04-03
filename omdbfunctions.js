var request = require('request');
var log = require("./logging.js");

module.exports = {
    getMovie: function(movieTitle) {
        var result = {};
        url = "http://www.omdbapi.com/?t=" + movieTitle;
        request(url, function (error, response, body) {
            if (response && response.statusCode === 200) {
                result = JSON.parse(body);
                // This will output the following information to your terminal/bash window:
                log.putLog("The title of the movie: " + result.Title); // * Title of the movie.
                log.putLog("Year the movie came out: " + result.Year); // * Year the movie came out.
                log.putLog("IMDB rating: " + result.imdbRating); // * IMDB Rating of the movie.
                log.putLog("Country movie produced "  + result.Country); // * Country where the movie was produced.
                log.putLog("Language of the movie: " + result.Language); // * Language of the movie.
                log.putLog("Plot of the movie: " + result.Plot); // * Plot of the movie.
                log.putLog("Actors in the movie: " + result.Actors); // * Actors in the movie.
                
                // Figure out the rotten tomatoes rating
                var rottenTomatoesRating = "Not Available" //just in case we don't find one
                var allRatings = result.Ratings;
                allRatings.forEach(function(element) {
                    if (element.Source === "Rotten Tomatoes") {
                        rottenTomatoesRating = element.Value
                    }
                }, this);
                log.putLog("Rotten tomatoes rating: " + rottenTomatoesRating);
            }
            else {
                log.putLog('error:', error); // Print the error if one occurred
            }
            
        });   
    }
};