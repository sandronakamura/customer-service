const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const cfg = require('./config/config');
const clientRoutes =  require('./routes/client/client')

const app = express();

app.use('/clients', clientRoutes);

// Open connection
app.listen(cfg.port, () => {
    console.log(`Servidor online em http://localhost:${cfg.port}`);
});


