const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});