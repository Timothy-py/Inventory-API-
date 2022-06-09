// import dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// app route

// instantiate express app
const app = express();
const port = process.env.PORT;

// use middlewares
app.use(cors());
app.use(express.json());

// app base route
app.use('/api/v1', routes);


// setup mongodb connection: connecting to mongo atlas
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB Database connection established successfully');
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})

// export app
module.exports = app;