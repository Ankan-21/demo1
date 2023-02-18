


const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.set('views', 'views');


const webroute = require('./route/web');
app.use(webroute);


const port = 7894;
const dbCon = "mongodb+srv://ankandb:PRwu28csqxeA4oww@cluster0.i0g6us6.mongodb.net/data"
mongoose.connect(dbCon, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(port, () => {

            console.log(`server running http://localhost:${port}`);
            console.log(`database connected`);
        })
    }).catch(err => {
        console.log(err);
    })

