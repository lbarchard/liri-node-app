var request = require('request');

module.exports = {
    getMovie: function(movieTitle) {
        var result = {};
        url = "http://www.omdbapi.com/?t=" + movieTitle;
        request(url, function (error, response, body) {
            if (response && response.statusCode === 200) {
                result = JSON.parse(body);
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
    }
};