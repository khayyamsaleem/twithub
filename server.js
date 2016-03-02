const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const tweetAt = 'benwafflez';

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(JSON.stringify(req.body));
    res.send('<h1>aids</h1>');
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
