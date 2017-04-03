var spotify = require('spotify');
var log = require("./logging.js");

module.exports = {
    getSong: function(song) {
        spotify.search({ type: 'track', query: song }, function(err, data) {
        if ( err ) {
            log.putLog('Error occurred: ' + err);
        return;
        }
            // This will show the following information about the song in your terminal/bash window
            log.putLog("The artist(s) are: " + data.tracks.items[0].artists[0].name); // Artist(s)
            log.putLog("The songs name is: " + data.tracks.items[0].name); // The song's name
            log.putLog("The album is: " + data.tracks.items[0].album.name); // The album that the song is from
            log.putLog("The preview URL is: " + data.tracks.items[0].preview_url); // A preview link of the song from Spotify
        });
    }
}
