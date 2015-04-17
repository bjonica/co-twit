# co-twitter
A very, very simple wrapper around the [twitter](https://www.npmjs.com/package/twitter) npm module for [co](https://github.com/tj/co)-based projects.

Very rudimentary early version

## Usage

````javascript
var co = require('co');
var Twitter = require('twitter');
var wrapper = require('co-twitter');

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var coTwitter = wrapper(client);

co(function\* () {
  response = yield client.get('statuses/user\_timeline', {screen\_name: 'bjonica'};
  var json = response[0];
  var raw = response[1];
  console.log("Got JSON Response: " + json);
})();
````
