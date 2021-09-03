const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 8080;
const videos = require('./routes/videos');

require('dotenv').config();

app.use(express.json());
app.use(express.static('public'))
app.use(cors());

app.use((_req, _res, next) => {
    console.log('Incoming Request');
    next();
});


app.use('/videos', videos);


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

