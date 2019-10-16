require('dotenv').config()

const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , app = new express()
    

const {SERVER_PORT} = process.env    
    
app.use(bodyParser.json());
app.use(cors());

app.listen(SERVER_PORT, () => {
      console.log(`Everything is running on PORT: ${SERVER_PORT}`)})
