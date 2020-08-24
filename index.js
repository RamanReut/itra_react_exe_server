const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('public'));
app.get('/api/orders', (req, resp) => {
    resp.sendFile(__dirname+'/resp.json');
});
app.get('*', (req, resp) => {
    resp.sendFile(__dirname + '/public/index.html');
});

app.listen(port);