const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.data)
        .then(data => res.send(data))
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
});
