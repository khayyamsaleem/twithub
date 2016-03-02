'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const tweetAt = 'benwafflez';

app.use(bodyParser.json());

app.post('/', (req, res) => {
    let data = req.body;
    let event = req.headers['x-github-event'];
    if (event) {
        let project = data.repository.name;
        let user = data.sender.login;
        if (event == "issues") {
            let action = data.action;
            let title = data.issue.title;
            let url = data.issue.html_url;
            console.log(`${project}: ${user} ${action} issue '${title}'\n${url}`);
        } else if (event == "issue_comment") {
            let title = data.issue.title;
            let url = data.issue.html_url;
            let comment = data.comment.body;
            console.log(`${project}: ${user} commented on issue '${title}'\n${comment}\n${url}`);
        } else {
            console.log(`unknown github event: ${event}`);
        }
    } else {
        console.log("Post request without github event");
    }
    console.log('\n');
    res.send('ok');
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
