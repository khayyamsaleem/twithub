'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const tweetAt = 'benwafflez';

app.use(bodyParser.json());

app.post('/', (req, res) => {
    let event = req.headers['x-github-event'];
    console.log(`got event ${event}`);
    res.send('<h1>aids</h1>');
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
