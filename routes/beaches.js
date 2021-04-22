const express = require('express')
const { nextTick } = require('process');
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const router = express.Router()

const { visitors, visitorDetails } = require('./initial');

app.use(bodyParser.urlencoded({ extended : false }));

router.get('/', (req, res) => {
    res.render('beaches')
})

router.get('/noronha', (req, res) => {
    res.render('beachesNoronha')
})

router.post('/noronha', (req, res) => {
    console.log('This is your noronhaActivity: ', req.body)
    if (req.body.noronhaActivity === 'hiking'){
        res.redirect('/beaches/noronha/hiking')
    } else if (req.body.noronhaActivity === 'diving') {
        res.redirect('/beaches/noronha/diving')
    } else {
        res.status(404).send('This activity is not included in your tour')
    }
})

router.get('/noronha/hiking', (req, res) => {
    res.render('beachesNoronhaHiking')
})

router.post('/noronha/hiking', (req, res) => {
    visitorDetails.noronhaHiking = Number(req.body.noronhaHikingRate);
    res.redirect('/beaches')
})

router.get('/noronha/diving', (req, res) => {
    res.render('beachesNoronhaDiving')
})

router.post('/noronha/diving', (req, res) => {
    visitorDetails.noronhaDiving = Number(req.body.noronhaDivingRate);
    res.redirect('/beaches')
})

router.get('/porto', (req, res) => {
    res.render('beachesPorto')
});

router.post('/porto', (req, res) => {
    if (req.body.portoActivity === 'relaxing'){
        res.redirect('/beaches/porto/relaxing')
    } else if (req.body.portoActivity === 'snorkeling') {
        res.redirect('/beaches/porto/snorkeling')
    } else {
        res.status(404).send('This activity is not included in your tour')
    }
})

router.get('/porto/relaxing', (req, res) => {
    res.render('beachesPortoRelaxing')
})

router.post('/porto/relaxing', (req, res) => {
    visitorDetails.portoRelaxing = Number(req.body.portoRelaxingRate);
    res.redirect('/beaches')
})

router.get('/porto/snorkeling', (req, res) => {
    res.render('beachesPortoSnorkeling')
})

router.post('/porto/snorkeling', (req, res) => {
    visitorDetails.portoSnorkeling = Number(req.body.portoSnorkelingRate);
    res.redirect('/beaches')
})

router.get('/recife', (req, res) => {
    res.render('beachesRecife')
});

router.post('/recife', (req, res) => {
    if (req.body.recifeActivity === 'diving'){
        res.redirect('/beaches/recife/diving')
    } else if (req.body.recifeActivity === 'walking') {
        res.redirect('/beaches/recife/walking')
    } else {
        res.status(404).send('This activity is not included in your tour')
    }
})

router.get('/recife/diving', (req, res) => {
    visitors.push(visitorDetails)
    console.log('sera??', visitors)
    res.render('beachesRecifeDiving')
});

router.get('/recife/walking', (req, res) => {
    res.render('beachesRecifeWalking')
});

router.post('/recife/walking', (req, res) => {
    visitorDetails.recifeWalking = Number(req.body.recifeWalkingRate);
    res.redirect('/beaches')
})

module.exports = router;