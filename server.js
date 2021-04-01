const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const expressLayout = require('express-ejs-layouts');
const ejs = require('ejs');


app.get('/', (req, res) => {
    res.render('home');
});

app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');


app.listen(PORT, (req, res) => {
    console.log(`App listening on port ${PORT}`);
});