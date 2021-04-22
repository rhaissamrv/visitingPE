const express = require('express');
const { send } = require('process');
const path = require('path');
const bodyParser = require('body-parser')

const app = express()

const router = express.Router();

const visitors = [] //database

const visitorDetails = {}

app.use(bodyParser.urlencoded({ extended : false }));

router.get('/', (req, res) => {
    res.render('homePage');
});

router.post('/', (req, res) => {
    visitorDetails.name = req.body.visitorName;
    visitorDetails.visitorLocation = req.body.visitorLocation;
    res.redirect('/tour_options')
})

router.get('/tour_options', (req, res) => {
    res.render('tourOptions')
})

router.post('/tour_options', (req, res) => {
    console.log('This is your destinyType: ', req.body)
    if (req.body.destinyType === 'beach'){
        res.redirect('/beaches')
    } else if (req.body.destinyType === 'countryside') {
        res.redirect('/countryside')
    } else {
        res.status(404).send('This place is not included in your tour')
    }
})

module.exports = {
    router, 
    visitors,
    visitorDetails
}