const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
const videos = require('./routes/videos');

app.use(express.json());
app.use(express.static('public'))

app.use((_req, _res, next) => {
    console.log('Incoming Request');
    next();
});


app.use('/videos', videos);






app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

