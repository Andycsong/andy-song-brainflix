const express = require('express');
const cors = require('cors');
const app = express();
const videos = require('./routes/videos');
const comments = require('./routes/comments');


require('dotenv').config();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.static('public'))
app.use(cors());

app.use((_req, _res, next) => {
    console.log('Incoming Request');
    next();
});

app.use('/videos', videos);
app.use('/videos', comments)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

