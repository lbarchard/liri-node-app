var fs = require("fs");
var liri = require("./liri.js");


module.exports = {
    doSomething: function() {
            fs.readFile('./random.txt', (err, data) => {
                if (err) throw err;
                liriCommand = (data.toString().split(",")[0]);
                liriArgument = (data.toString().split(",")[1]);
                liri(liriCommand, liriArgument);
            });
    }
}