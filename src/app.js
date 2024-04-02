// ./src/index.js

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

// defining the Express app
const app = express();


const {startDatabase} = require('./db/mongo');
const {insertAd, getAds,updateAd,deleteAd} = require('./db/ads');



// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

 
// replace the endpoint responsible for the GET requests
app.get('/', async (req, res) => {
  res.send(await getAds());
});

const ads = require('./router/ads')
const combination = require('./router/combination')
app.use('/ads', ads)
app.use('/combination', combination)


// start the in-memory MongoDB instance
startDatabase();
module.exports = app;