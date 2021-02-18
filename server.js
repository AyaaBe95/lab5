// 'use strict';

// require('dotenv').config();
// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 3000;

// app.use(express.static('./public'));

// app.get('/hello', (request, response) => {
//   response.status(200).send('Hello');
// });

// app.get('/data', (request, response) => {
//   let airplanes = {
//     departure: Date.now(),
//     canFly: true,
//     pilot: 'Well Trained',
//   };
//   response.status(200).json(airplanes);
// });

// app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));

// app.listen(PORT,() => console.log(`Listening on port ${PORT}`));

'use strict';
// require('dotenv').config();

const { response } = require('express');
const express = require('express')
const server = express()

const PORT = 3000; // connect  server with web

server.use(express.static('./public'));




server.get('/test',(request,response) => {
    response.send('My server is working')


})

server.listen(PORT,() => {
    console.log("portflio has been deployed on port 3000")

})


