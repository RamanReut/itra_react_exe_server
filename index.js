const express = require('express');
const app = express();
const port = 4556;

app.get('/api/orders', (req, resp) => {
    resp.sendFile(__dirname+'/resp.json');
});

app.listen(port);