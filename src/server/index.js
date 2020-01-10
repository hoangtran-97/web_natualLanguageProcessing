const projectData = {};
const path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const cors = require("cors");
var bodyParser = require('body-parser')
dotenv.config();
const aylien = require("aylien_textapi");
// set aylien API credentias
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()
const port = 8081
app.use(bodyParser.json())
app.use(cors());
app.use(express.static('dist'))
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.get("/all", getAll)
app.post("/sentiment", postSentiment)

function postSentiment(request, response) {
    console.log(request.body)
    textapi.sentiment({
        'text': request.body.text
    }, function (error, response) {
        if (error === null) {
            console.log(response);
            projectData["text"] = response
        }
    });
}
function getAll(request, response) {
    response.send(projectData)
}
