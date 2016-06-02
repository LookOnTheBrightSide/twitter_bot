var TwitKeys = require("./apikeys.js");

var Twit = require('twit');

var T = new Twit({
    consumer_key: TwitKeys.consumer_key,
    consumer_secret: TwitKeys.consumer_secret,
    access_token: TwitKeys.access_token,
    access_token_secret: TwitKeys.access_token_secret,
    timeout_ms: 60 * 1000 // optional HTTP request timeout to apply to all requests.
});
var parameters = {
    q: 'junior developer since:2016-05-20',
    count: 100,
    country: "Ireland"
};

var finalData = function(err, data, response) {
        // console.log(data.statuses.length, "+++++++++++", data.statuses[0].text);
        var statuses = data.statuses;
        statuses.forEach(function(status) {
            console.log(status.text + "\n", "*******_______*******");
        })
    }
    // developer jobs
T.get('search/tweets', parameters, finalData)