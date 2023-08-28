const express = require('express');
const app = express();
const api = require('./src/routes/api');

app.use(api);

app.listen(3000, () => {
    console.log('server running on port 3000');
})