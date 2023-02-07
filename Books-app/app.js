require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/router');
const hbs = require('hbs');
const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({extended:true}));





app.set('view engine',"hbs");
app.set('views', __dirname + '/frontend/views');
hbs.registerPartials(__dirname + "/frontend/partials");






app.use(routes);

app.all("*" , (req, res) => {
    res.render("error" , {pageTitle  : "Invalid"})})

app.listen(PORT , () => console.log(`working on port ${PORT}`));