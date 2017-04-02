var keys = require("./keys.js");
var twitter = require('twitter');

module.exports = {
    getTweets: function(screenName) {
        var client = new twitter(keys.twitterKeys);
        var params = {
            screen_name: screenName
        };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                // This will show your last 20 tweets and when they were created at in your terminal/bash window.
                for (var num = 1; (num < 21) && (num < tweets.length+1); num++) {
                    console.log("Tweet #" + num + " created: " + tweets[num - 1].created_at);
                    console.log(tweets[num - 1].text);
                    console.log("-------------------------------------");
                }
            }
        });
    }
}