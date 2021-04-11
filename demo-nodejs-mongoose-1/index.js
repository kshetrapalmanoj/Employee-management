const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const PORT = 8088;
const routes = require('./routes');
const cors=require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
routes(app);
mongoose.connect(config.mongoUrl, {useNewUrlParser: true});

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
});