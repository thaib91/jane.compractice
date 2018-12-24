require('dotenv').config();
const express = require('express');
const massive = require('massive');
const mc = require('../server/mainController');
const {CONNECTION_STRING, SERVER_PORT} = process.env;



const app = express();
app.use(express.json());

app.get('/api/items', mc.getAll)

massive(CONNECTION_STRING)
    .then(connection => {
        app.set('db', connection)
        app.listen(SERVER_PORT, ()=>{console.log(`Let's go get ${SERVER_PORT} BURGERS!`)}) 
    }).catch(err=>console.log(err))


