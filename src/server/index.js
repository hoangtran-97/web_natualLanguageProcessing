const projectData = {};
const path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const cors = require("cors");
var bodyParser = require('body-parser')
dotenv.config();
const mockAPIResponse = require('./mockAPI.js')
const aylien = require("aylien_textapi");
// set aylien API credentias
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()
app.use(bodyParser.json())
app.use(cors());
const port = 8081

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
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
