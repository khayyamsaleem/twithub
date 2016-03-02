var Twitter = require('twitter');
var client = new Twitter({
	consumer_key: 'j5oWVtmbD3MnrGtRk0jMOEI4z', 
	consumer_secret: 'VfoxZbtrTjeSPVOkuzsmjUB8c6TmIHKsZIZr83MSo0CpN1x72F',
	access_token_key: '704876576337477636-9wsUP6ZuWHsbpHhnSyiOQIkoxd5OalJ', 
	access_token_secret: 'IZ06WkLDpmCzvLXf6tTKVYl893xPIV39PK7wUCHovf8qc'
});

var params = {screen_name: 'TwithubB'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
	if (!error) {
		console.log(tweets);
	}
});

client.post('statuses/update', {status: "Ben's a dick"}, function(error, tweet, response){
	if(error) console.log(error);
	console.log(tweet)
	console.log(response);
});

client.post('statuses/update', {in_reply_to_status_id: "@benwafflez Ben is a dick"}, function(error, tweet, response){
	if(error) console.log(error);
	console.log(tweet)
	console.log(response);
});
