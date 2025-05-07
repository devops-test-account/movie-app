const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

// const movieRouter = require('./routes/movie-router')
const web = require('./routes/index')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

db.on("error", () => {
    console.error("connection error: ")
});

app.get('/', (req, res) => {
    res.send('Backend is running!')
})

// app.use('/api', movieRouter)
app.use('/api', web);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))