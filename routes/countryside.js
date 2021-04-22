const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express()

const router = express.Router();

const {visitors, visitorDetails} = require('./initial')

app.use(bodyParser.urlencoded({ extended : false }));

router.get('/', (req, res) => {
    res.render('countryside')
});

router.get('/bonito', (req, res) => {
    res.render('countrysideBonito')
});

router.post('/bonito', (req, res) => {
    visitorDetails.bonitoRate = Number(req.body.bonitoRate);
    res.redirect('/countryside')
});

router.get('/vale_do_catimbau', (req, res) => {
    res.render('countrysideValeDoCatimbau')
});

router.post('/vale_do_catimbau', (req, res) => {
    visitorDetails.catimbauRate = Number(req.body.catimbauRate);
    res.redirect('/countryside')
});

module.exports = router;