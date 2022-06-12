// import dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('./logger');

require('dotenv').config();

// app route
const inventory_routes = require('./routes/inventory.route');
const warehouse_routes = require('./routes/warehouse.route')

// instantiate express app
const app = express();
const port = process.env.PORT;

// use middlewares
app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// app base route
app.use('/api/v1/inventory', inventory_routes);
app.use('/api/v1/warehouse', warehouse_routes);


// setup mongodb connection: connecting to mongo atlas
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    logger.info('MongoDB Database connection established successfully');
})

app.listen(port, ()=>{
    logger.info(`Server is running on port: ${port}`)
})

// export app
module.exports = app;