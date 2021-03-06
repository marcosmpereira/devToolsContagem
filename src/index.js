const express = require('express');
const routes = require('./routes');
const env = require('./config/environment');

const app = express();
app.use(express.json());
app.use(routes);

app.listen(env.port);