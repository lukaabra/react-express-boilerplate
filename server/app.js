const express = require('express'),
    cors = require('cors');

const app = express();
const port = 3001;

// TODO: Add API imports

app.use(cors());

app.get('/api/data', (req, res) => {
    console.log("Request recieved!");
    const a = [1, 2, 3, 4, 5];
    res.json(a);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});