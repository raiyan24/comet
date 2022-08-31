const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const expressLayout = require('express-ejs-layouts');
const pageRoute = require('./routes/pageRoute');

//environment variable
const PORT = process.env.SERVER_PORT;

//init express
const app = express();

//init ejs
app.set('view engine', 'ejs');
app.set('layout', 'layouts/app');
app.use(expressLayout);

//init static folde
app.use(express.static('public'));

//init router
app.use(pageRoute);

//listening server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgBlue.black);
});