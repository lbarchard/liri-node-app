var spotify = require('spotify');

module.exports = {
    getSong: function(song) {
        spotify.search({ type: 'track', query: song }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
        return;
        }
            // This will show the following information about the song in your terminal/bash window
            console.log("The artist(s) are: " + data.tracks.items[0].artists[0].name); // Artist(s)
            console.log("The songs name is: " + data.tracks.items[0].name); // The song's name
            console.log("The album is: " + data.tracks.items[0].album.name); // The album that the song is from
            console.log("The preview URL is: " + data.tracks.items[0].preview_url); // A preview link of the song from Spotify
        });
    }
}
