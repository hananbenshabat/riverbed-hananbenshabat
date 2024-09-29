const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/books', async (req, res) => {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${req.query.q}`);
    res.json(response.data);
});

app.listen(5000);
