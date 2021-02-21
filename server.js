

'use strict';
 require('dotenv').config();

const express = require('express')
const server = express()

const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));




server.get('/test',(request,response) => {
    response.send('My server is working')


})

server.listen(PORT,() => {
    console.log("portflio has been deployed on port 3000")

})


