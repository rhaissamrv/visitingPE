const path = require('path');

const bodyParser = require('body-parser')

const express = require('express');

const app = express();

const { visitors, visitorDetails, router } = require('./routes/initial');

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

const beachesRoutes = require('./routes/beaches');
const countrysideRoutes = require('./routes/countryside');
const { log } = require('console');


app.use(bodyParser.urlencoded({ extended : false }));

app.use('/', router);
app.use('/beaches', beachesRoutes);
app.use('/countryside', countrysideRoutes);

app.use('/end_tour', (req, res) => {
    visitors.push(visitorDetails);
    const rateSum =
        Object.values(visitorDetails)
        .slice(2)
        .reduce((accumulator, currentValue) => accumulator + currentValue);

    const rateQuantity = Object.values(visitorDetails)
        .slice(2)
        .length;

    const finalRate = (rateSum / rateQuantity);

    res.render('endPage', { finalRate: finalRate });
});

app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

