var fs = require("fs");

module.exports = {
    putLog: function(message) {
        console.log(message);
        message = message + "\n";
        fs.appendFileSync("./log.txt", message);
        }

    }
