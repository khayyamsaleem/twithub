'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const tweetAt = 'benwafflez';

app.use(bodyParser.json());

app.post('/', (req, res) => {
    let event = req.headers['x-github-event'];
    if (event == "issues") {
        let project = req.body.repository.name;
        let user = req.body.issue.user.login;
        let title = req.body.issue.title;
        let url = req.body.issue.html_url;
        console.log(`${project}: ${user} created issue ${title}\n${url}`);
    } else if (event == "issue_comment") {

    } else {
        console.log(`unknown github event: ${event}`);
    }
    res.send('ok');
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
