const express = require("express");
const path = require('path');
const app = express();
require('dotenv').config;

const videos = [
    "v0xYktFNmy4",
    "2URASwHWdtU",
    "gtmTY7Dm5PQ",
    "kGGRX6Id8Xg",
    "G7AoRJL4fMc"
]

app.get('/api/videos', (req, res) => {
    res.send(videos);
})

if (process.env.NODE_ENV != "development") {

    app.use(express.static(path.join(__dirname, 'front/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'front/build'), function (error) {
            if (error) {
                res.status(500).send(error);
            }
        })
    })
}


app.listen(3001, () => {
    console.log("Running in ", "http://localhost:" + 3001)
})