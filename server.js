const express = require('express');
const app = express();
const port = 45510;

app.use((request, response, next) => {
    response.append("Access-Control-Allow-Origin", request.headers.origin);
    response.append("Access-Control-Allow-Credentials", "true");
    response.append("Content-Type", "application/json");
    next();
});

app.get('/getStatus', (request, response) => {
    response.send('{status: 1}');
});

app.listen(port, (err) => {
    if (err) {
        return console.log('error', err);
    }
    console.log(`server is listening on ${port}`);
});
