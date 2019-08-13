const express = require('express');
const app = express();
const routes = require('./server/routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.use('/', (req, res) => {
    res.sendStatus(404)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('App listening on port:', PORT));