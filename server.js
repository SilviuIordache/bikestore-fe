const express = require('express');
const nconf = require('nconf');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const cors = require('cors');
const history = require('connect-history-api-fallback');

const config = require('./config.json');

// nconf configuration
// load process.argv
nconf.env() 
// load configuration file into hierachy
nconf.file('./config.json'); 

// initialize express app
const app = express();

// enable compression
app.use(compression());

// enable cross origin resource sharing
app.use(cors());

// enable security features
app.use(helmet());

// enable logging
app.use(morgan('short'));

// history mode
app.use(history({ history: 'src/index.html' }));

// file server
app.use('/', express.static(path.join(__dirname, './build')))


// configuration
app.get('/app/config', (req, res) => {
  res.json(nconf.get('web'));
});

const port = config.server.port;
let hostname;

// const mode = 'production';
const mode = 'development'


if (mode === 'development') {
  hostname = `http://localhost:${port}`
} else {
  hostname = config.server.url;
}

app.listen(port, () => {
  console.log(config.server.port)
  console.log(`Server started: ${hostname}`)
})