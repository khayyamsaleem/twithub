const twit = require('twitter');
const bodyParser = require('body-parser');
const app = twitter();

const tweetFrom = 'TwithubB';

var client = new Twitter({
	consumer_key: 'G61bMjUHHxLrHzTnrCSfxI4IeOLtOSFXJUBM51xKDmJ5rlDAL8', 
	consumer_secret: 'G61bMjUHHxLrHzTnrCSfxI4IeOLtOSFXJUBM51xKDmJ5rlDAL8',
	access_token_key: '704876576337477636-y1ABqx4EJN2laossezoedWlSKjs6NHx', 
	access_token_secret: 'nils8jhtwyD5jQtP4DOLAVRLP9QrnZjfxB0VWdfGLx3Dy'
});

var params = {screen_name: 'TwithubB'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
	if (!error) {
		console.log(tweets);
	}
};

client.post('statuses/update', {status: "Ben's a dick"}, function(error, tweet, response){
	if(error) throw error;
	console.log(tweet)
	console.log(response);
});


