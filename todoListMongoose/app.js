const { application } = require('express');
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.urlencoded());


const paricalsDir = path.join(__dirname, '/frontend/partials');
const staticDir = path.join(__dirname, '/static');
const frontEndDir = path.join(__dirname, "/frontend/views");
app.set("view engine", "hbs");
app.set("views" , frontEndDir);
hbs.registerPartials(paricalsDir);
app.use(express.static(staticDir));
app.use(bodyParser.json());
const userRoutes = require('./modules/user-routes');
app.use(userRoutes);


app.all("*" , (req , res) => {
    res.render("error")
})











app.listen(3000 , ()=> console.log("working on 3000"));